<template>
  <v-f-modal-layout>
    <div class="sm:flex custom-new-folder-popup edit-preview-container">
      <div class="custom-file-picker-title">
        <div class="file-picker-title-img">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 stroke-blue-600 dark:stroke-blue-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="none"
            stroke-width="1.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>

          <h3
            class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-400"
            id="modal-title"
          >
            {{ t("Edit") }}
          </h3>
        </div>
        <hr />
      </div>
      <div
        class="mt-3 text-center w-full p-4 h-full create-folder-form edit-preview"
      >
        <div>
          <Text
            v-if="loadPreview('text')"
            :selection="selection"
            @load="setLoad(true)"
          />
          <Image
            v-else-if="loadPreview('image')"
            :selection="selection"
            @load="setLoad(true)"
          />
          <Video
            v-else-if="loadPreview('video')"
            :selection="selection"
            @load="setLoad(true)"
          />
          <Audio
            v-else-if="loadPreview('audio')"
            :selection="selection"
            @load="setLoad(true)"
          />
          <Pdf
            v-else-if="loadPreview('application/pdf')"
            :selection="selection"
            @load="setLoad(true)"
          />
          <Default v-else :selection="selection" @load="setLoad(true)" />
        </div>

        <div class="text-gray-700 dark:text-gray-200 text-sm">
          <div class="flex leading-5" v-if="loaded == false">
            <svg
              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25 stroke-blue-900 dark:stroke-blue-100"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>{{ t("Loading") }}</span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="py-2 flex font-normal break-all dark:text-gray-200 rounded text-xs"
    >
      <div>
        <span class="font-bold pl-2">{{ t("File Size") }}: </span
        >{{ filesize(selection.item.file_size) }}
      </div>
      <div>
        <span class="font-bold pl-2">{{ t("Last Modified") }}: </span>
        {{ datetimestring(selection.item.last_modified) }}
      </div>
    </div>

    <template v-slot:buttons>
      <div class="search-terms-div-preview bg-white dark:bg-gray-800">
        <div>
          <label
            class="custom-uploader-label"
            for="img-upload-rte-search-terms"
          >
            <div class="post-info icon-circle search-icon">
              <img
                class="router-img-btn-img"
                src="../../assets/imagetwo.svg"
                alt=""
                srcset=""
              />
            </div>
            Search Terms</label
          >
        </div>
        <hr />
        <div>
          <input
            id="search-terms-file-picker"
            class="form-control user-dynamic-input address-autocomplete"
            type="text"
            placeholder="Search Terms"
            autocomplete="off"
          />
        </div>
        <div id="tags-space">
          <span v-for="tag in img_tags" :key="tag.id" class="img-tag">
            <img
              @click="deleteTag(tag.tag_id)"
              src="../../assets/x.svg"
              alt="delete tag"
              class="delete-tag-x"
            />
            <p>{{ tag.tag_name }}</p>
          </span>
        </div>
      </div>
      <div class="details-div bg-white dark:bg-gray-800">
        <div>
          <label class="custom-uploader-label" for="img-upload-rte-captions">
            <div class="post-info icon-circle details-icon">
              <img
                class="router-img-btn-img"
                src="../../assets/imagefive.svg"
                alt=""
                srcset=""
              />
            </div>
            File Details</label
          >
        </div>
        <hr />
        <div>
          <input
            id="details-file-picker"
            class="form-control user-dynamic-input address-autocomplete"
            type="text"
            placeholder="Details"
            autocomplete="off"
          />
        </div>
      </div>
      <div class="bg-white custom-file-picker-action">
        <button
          type="button"
          @click="emitter.emit('vf-modal-close')"
          class="new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          {{ t("Close") }}
        </button>
        <button
          type="button"
          @click="download()"
          class="new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          {{ t("Download") }}
        </button>
      </div>
    </template>
  </v-f-modal-layout>
</template>

<script>
export default {
  name: "VFModalPreview",
};
</script>

<script setup>
import { inject, onMounted, ref } from "vue";
import VFModalLayout from "./ModalLayout.vue";
import Text from "../previews/Text.vue";
import Image from "../previews/Image.vue";
import Default from "../previews/Default.vue";
import Video from "../previews/Video.vue";
import Audio from "../previews/Audio.vue";
import Pdf from "../previews/Pdf.vue";
import buildURLQuery from "../../utils/buildURLQuery.js";
import { useApiUrl } from "../../composables/useApiUrl.js";
import filesize from "../../utils/filesize.js";
import datetimestring from "../../utils/datetimestring.js";
const { apiUrl } = useApiUrl();
const emitter = inject("emitter");
const { t } = inject("i18n");
const loaded = ref(false);

const setLoad = (bool) => (loaded.value = bool);

let img_tags = ref([]);

const props = defineProps({
  selection: Object,
});

onMounted(() => {
  addImageTags();
});

const loadPreview = (type) =>
  (props.selection.item.mime_type ?? "").startsWith(type);

const download = () => {
  const url =
    apiUrl.value +
    "?" +
    buildURLQuery({
      q: "download",
      adapter: props.selection.adapter,
      path: props.selection.item.path,
    });
  emitter.emit("vf-download", url);
};
function addImageTags() {
  let tag_input = document.querySelector("#search-terms-file-picker");
  tag_input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      img_tags.value.push({
        tag_id: img_tags.value.length + 1,
        tag_name: e.target.value,
      });
      tag_input.value = "";
    }
  });
}
function deleteTag(id) {
  const tag = img_tags.value.findIndex((obj) => obj.tag_id === id);
  img_tags.value.splice(tag, 1);
}
</script>
