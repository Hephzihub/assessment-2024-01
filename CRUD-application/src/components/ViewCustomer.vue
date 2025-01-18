<script setup>
import { VueFinalModal } from "vue-final-modal";
import IconClose from "./IconClose.vue";

const props = defineProps({
  customerInfo: Object,
});

const emits = defineEmits(["confirm"]);
</script>

<template>
  <VueFinalModal
    class="flex h-full w-full justify-center items-center"
    content-class="relative bg-white p-5 rounded-2xl border w-full max-w-xs min-h-[200px]"
    overlay-class="bg-background/80 backdrop-blur-sm"
    :overlayTransition="'vfm-fade'"
    :contentTransition="'vfm-slide-down'"
    :clickToClose="true"
  >
    <div class="flex justify-between items-center mb-5">
      <h4 class="font-medium text-xl">
        {{ `${customerInfo.firstName} ${customerInfo.lastName}` }}
      </h4>
      <div>
        <button @click="emits('confirm')">
          <IconClose class="w-5 h-5" />
        </button>
      </div>
    </div>

    <div class="space-y-5 text-sm">
      <div>
        <p class="font-medium">Email</p>
        <p>{{ customerInfo.email }}</p>
      </div>

      <div>
        <p class="font-medium">Phone</p>
        <p>{{ customerInfo.phone }}</p>
      </div>

      <div>
        <p class="font-medium">State</p>
        <p>{{ customerInfo.state }}</p>
      </div>

      <div>
        <p class="font-medium">Status</p>
        <p>{{ customerInfo.status ? 'Active' : 'Inactive' }}</p>
      </div>

      <div>
        <p class="font-medium">About</p>
        <div v-html="customerInfo.about"></div>
      </div>
    </div>
  </VueFinalModal>
</template>
