<script setup>
import IconAddBtnVue from "./IconAddBtn.vue";
import IconSearch from "./IconSearch.vue";
import { useCustomerStore } from "../stores/customerStore";
import { useModal } from "vue-final-modal";
import CreateCustomer from "./CreateCustomer.vue";

const customerStore = useCustomerStore();

const { open, close} = useModal({
  component: CreateCustomer,
  attrs: {
    edit: false,
    index: null,
    customer: null,
    onConfirm() {
      close();
    },
  }
});
</script>

<template>
  <div class="flex flex-wrap gap-10">
    <div class="w-full max-w-64">
      <button
        class="bg-mainColor w-full text-white px-3 py-2 rounded flex justify-center items-center"
        @click="open()"
      >
        <IconAddBtnVue class="w-5 h-5 mr-2" />
        <span class="text-sm">Create Customer</span>
      </button>
    </div>

    <div class="relative w-full max-w-64">
      <input
        type="text"
        class="pl-3 pr-9 w-full"
        placeholder="Search customer"
        v-model="customerStore.query"
      />
      <IconSearch class="w-5 h-5 mr-2 absolute right-2 top-2" />
    </div>
  </div>
</template>
