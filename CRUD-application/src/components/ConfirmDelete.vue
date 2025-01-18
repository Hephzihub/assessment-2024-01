<script setup>
import { VueFinalModal } from 'vue-final-modal';
import IconClose from './IconClose.vue';
import { useCustomerStore } from '@/stores/customerStore';

const { deleteCustomer } = useCustomerStore();

const props = defineProps({
  index: Number,
  name: String,
});

const emits = defineEmits(["confirm"]);
</script>

<template>
    <VueFinalModal
    class="flex h-full w-full justify-center items-end sm:items-center"
    content-class="relative bg-white p-5 rounded-t-2xl sm:rounded-2xl w-full border max-w-xs min-h-[200px]"
    overlay-class="bg-background/80 backdrop-blur-sm"
    :overlayTransition="'vfm-fade'"
    :contentTransition="'vfm-slide-down'"
    :clickToClose="true"
  >
    <div class="flex justify-between items-center mb-5">
      <h4 class="font-medium text-xl">Delete User</h4>
      <button @click="emits('confirm')">
        <IconClose class="w-5 h-5" />
      </button>
    </div>

    <div>
      <p>Do you want to delete <strong>{{ name }}</strong> information?</p>
      <div class="flex flex-col gap-5 mt-5">
        <button
          class="bg-yellow-500 text-white px-3 py-2 rounded"
          @click="deleteCustomer(index); emits('confirm')"
        >
          Yes
        </button>
        <button
          class="bg-transparent shadow-md  px-3 py-2 rounded"
          @click="emits('confirm')"
        >
          No
        </button>
      </div>
    </div>
  </VueFinalModal>
</template>