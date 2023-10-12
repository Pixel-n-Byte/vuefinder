<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="v-f-modal relative z-30" aria-labelledby="modal-title" role="dialog" aria-modal="true"
    @keyup.esc="emitter.emit('vf-modal-close')" tabindex="0">
    <div
      class="fixed inset-0 bg-gray-500 dark:bg-gray-600 dark:bg-opacity-75 bg-opacity-75 transition-opacity custom-upload-background">
    </div>

    <div :class="`${props.modalType !== 'standalone' ? 'fixed' : ''} z-10 inset-0 overflow-hidden`">
      <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0"
        @mousedown.self="emitter.emit('vf-modal-close')">
        <div
          :class="`${props.modalType !== 'standalone' ? 'custom-layout-regular' : 'custom-layout-standalone'} custom-popup-layout transition-all`">
          <div class="bg-white dark:bg-gray-800 custom-layout-pop-window">
            <slot />
          </div>
          <div class="custom-layout-button-slot">
            <slot name="buttons" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted } from "vue";

const emitter = inject("emitter");

const props = defineProps({
  modalType: {
    type: String,
  },
})

onMounted(() => {
  const inputElements = document.querySelector(".v-f-modal input");
  console.log(props.modalType !== 'standalone')
  if (inputElements) {
    inputElements.focus();
  }
});
</script>
