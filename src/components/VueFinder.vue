<template>
  <div class="vuefinder">
    <div :class="`${darkMode ? 'dark' : ''} vuefinder-custom-div`">
      <div :class="fullScreen ? 'fixed w-screen inset-0 z-20' : 'relative rounded-md'
        " :style="!fullScreen ? 'max-height: ' + maxHeight : ''"
        class="custom-vuefinder-explorer-container border flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min select-none"
        @mousedown="emitter.emit('vf-contextmenu-hide')" @touchstart="emitter.emit('vf-contextmenu-hide')">
        <v-f-toolbar :data="fetchData" :type="props.vueFinderType" />
        <v-f-breadcrumb :data="fetchData" :type="props.vueFinderType" />
        <v-f-explorer :view="view" :data="fetchData" :type="props.vueFinderType" />
        <v-f-statusbar :data="fetchData" />
      </div>
      <component v-if="modal.active" :is="'v-f-modal-' + modal.type" :selection="modal.data" :current="fetchData"
        :movedItemsProp="movedItemsPropValue" :modalType="props.vueFinderType" />
      <v-f-context-menu :current="fetchData" testProp="hi_there" />
      <iframe id="download_frame" style="display: none"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueFinder",
};
</script>

<script setup>
import { defineProps, onMounted, provide, reactive, ref, watch } from "vue";
import ajax from "../utils/ajax.js";
import mitt from "mitt";
import { useStorage } from "../composables/useStorage.js";
import { useApiUrl } from "../composables/useApiUrl.js";
import VFToolbar from "../components/Toolbar.vue";
import VFExplorer from "../components/Explorer.vue";
import VFStatusbar from "../components/Statusbar.vue";
import VFBreadcrumb from "../components/Breadcrumb.vue";
import VFContextMenu from "../components/ContextMenu.vue";
import { useI18n } from "../composables/useI18n.js";

defineExpose({
  performAction,
});

let dir_path = ref();

const props = defineProps({
  url: {
    type: [String],
  },
  id: {
    type: String,
    default: "vf",
  },
  dark: {
    type: Boolean,
    default: false,
  },
  locale: {
    type: String,
    default: "en",
  },
  maxHeight: {
    type: String,
    default: "600px",
  },
  maxFileSize: {
    type: String,
    default: "10mb",
  },
  postData: {
    type: Object,
    default: {},
  },
  vueFinderType: {
    type: String,
    default: "regular",
  },
  vueFinderUploadUrl: {
    type: String,
    default: "",
  },
  vueFinderGetInfoUrl: {
    type: String,
    default: "",
  },
  vueFinderDeleteUrl: {
    type: String,
    default: "",
  },
  vueFinderMoveUrl: {
    type: String,
    default: "",
  },
  movePrompt: {
    type: Boolean,
    default: false,
  },
  movedItems: {
    default: null
  }
});
const emitter = mitt();
const { setStore, getStore } = useStorage(props.id);
const adapter = ref(getStore("adapter"));
let movePropValue = ref(props.movePrompt)
let movedItemsPropValue = ref(props.movedItems)

provide("emitter", emitter);
provide("storage", useStorage(props.id));
provide("postData", props.postData);
provide("adapter", adapter);
provide("maxFileSize", props.maxFileSize);



// Lang Management
const i18n = useI18n(props.id, props.locale, emitter);
const { t } = i18n;
provide("i18n", i18n);

const { apiUrl, setApiUrl } = useApiUrl();
setApiUrl(props.url);

const fetchData = reactive({
  adapter: adapter.value,
  storages: [],
  dirname: ".",
  files: [],
  type: props.vueFinderType,
  url: props.vueFinderUploadUrl
});

// View Management
const view = ref(getStore("viewport", "grid"));
const darkMode = ref(getStore("darkMode", props.dark));

emitter.on("vf-darkMode-toggle", () => {
  darkMode.value = !darkMode.value;
  setStore("darkMode", darkMode.value);
});

function performAction() {
  emitter.emit("vf-fetch", { params: { q: "index", adapter: adapter.value } });
}

const loadingState = ref(false);

provide("loadingState", loadingState);

const fullScreen = ref(getStore("full-screen", false));

emitter.on("vf-fullscreen-toggle", () => {
  fullScreen.value = !fullScreen.value;
  setStore("full-screen", fullScreen.value);
});

emitter.on("vf-view-toggle", (newView) => {
  view.value = newView;
});

// Modal Management
const modal = reactive({
  active: false,
  type: "delete",
  data: {},
});

emitter.on("vf-modal-close", () => {
  modal.active = false;
});

emitter.on("vf-modal-show", (item) => {
  modal.active = true;
  modal.type = item.type;
  modal.data = item;
});
emitter.on("custom-modal-show", (item) => {
  emit("customUploadItem", item, fetchData);
});

emitter.on('custom-drop-image', (args) => {
  emit("customDragDrop", args)
})

emitter.on("custom-v-f-insert", (item) => {
  emit("customInsertItem", item);
});
emitter.on("custom-v-f-delete", (items) => {
  emit("customDeleteItem", items);
});
emitter.on("custom-v-f-move", (items) => {
  emit("customMoveItem", items);
});

const emit = defineEmits(["deleteButton", "fileMoved", "fileUploaded", "customUploadItem", "customInsertItem", 'customDeleteItem', 'customMoveItem']);

emit("fileUploaded", () => {
  console.log("here Emmit uploaded");
});

emitter.on("file-moved", (data) => {
  emit("fileMoved", data);
});

const updateItems = (data) => {
  Object.assign(fetchData, data);
  emitter.emit("vf-nodes-selected", {});
  emitter.emit("vf-explorer-update");
};

let controller;
emitter.on("vf-fetch-abort", () => {
  controller.abort();
  loadingState.value = false;
});

emitter.on("vf-fetch", ({ params, onSuccess = null, onError = null }) => {
  if (["index", "search"].includes(params.q)) {
    if (controller) {
      controller.abort();
    }
    loadingState.value = true;
  }
  dir_path = params.path;

  emit("customUpdateVariable", dir_path);

  controller = new AbortController();
  const signal = controller.signal;
  ajax(apiUrl.value, { params, signal })
    .then((data) => {
      adapter.value = data.adapter;
      if (["index", "search"].includes(params.q)) {
        loadingState.value = false;
      }
      emitter.emit("vf-modal-close");
      updateItems(data);
      onSuccess(data);
    })
    .catch((e) => {
      if (onError) {
        onError(e);
      }
    })
    .finally(() => { });
});

emitter.on("vf-download", (url) => {
  document.getElementById("download_frame").src = url;
  emitter.emit("vf-modal-close");
});

onMounted(() => {
  emitter.emit("vf-fetch", { params: { q: "index", adapter: adapter.value } });
});

watch(() => {
  movedItemsPropValue.value = props.movedItems;
}, {
  immediate: false
})
</script>
