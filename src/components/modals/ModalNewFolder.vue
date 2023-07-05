<template>
  <v-f-modal-layout>
    <div class="sm:flex custom-new-folder-popup">
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
            {{ t("New Folder") }}
          </h3>
        </div>
        <hr />
      </div>
      <div class="mt-3 text-center w-full p-4 h-full">
        <div class="mt-2 create-folder-form">
          <p class="text-sm text-gray-500">{{ t("Create a new folder") }}</p>
          <input
            v-model="name"
            @keyup.enter="createFolder"
            class="px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full"
            :placeholder="t('Folder Name')"
            type="text"
          />
          <message v-if="message.length" @hidden="message = ''" error>{{
            message
          }}</message>
        </div>
      </div>
    </div>

    <template v-slot:buttons>
      <button
        type="button"
        @click="createFolder"
        class="new-folder-action w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
      >
        {{ t("Create") }}
      </button>
      <button
        type="button"
        @click="emitter.emit('vf-modal-close')"
        class="new-folder-action mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
      >
        {{ t("Cancel") }}
      </button>
    </template>
  </v-f-modal-layout>
</template>

<script>
export default {
  name: "VFModalNewFolder",
};
</script>

<script setup>
import VFModalLayout from "./ModalLayout.vue";
import { inject, ref } from "vue";

const emitter = inject("emitter");
const { getStore } = inject("storage");
const adapter = inject("adapter");
import Message from "../Message.vue";
const { t } = inject("i18n");

const props = defineProps({
  selection: Object,
  current: Object,
});

const name = ref("");
const message = ref("");

const createFolder = () => {
  if (name.value != "") {
    emitter.emit("vf-fetch", {
      params: {
        q: "newfolder",
        adapter: adapter.value,
        path: props.current.dirname,
        name: name.value,
      },
      onSuccess: () => {
        emitter.emit("vf-toast-push", {
          label: t("%s is created.", name.value),
        });
      },
      onError: (e) => {
        message.value = t(e.message);
      },
    });
  }
};
</script>
