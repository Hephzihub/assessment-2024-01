<script setup>
import IconAddBtnVue from "./IconAddBtn.vue";
import IconSearch from "./IconSearch.vue";
import { useCustomerStore } from "../stores/customerStore";

const customerStore = useCustomerStore();
</script>

<template>
  <div class="flex gap-10">
    <div>
      <button
        class="bg-mainColor text-white px-3 py-2 rounded flex items-center"
      >
        <IconAddBtnVue class="w-5 h-5 mr-2" />
        <span class="text-sm">Create Customer</span>
      </button>
    </div>

    <div class="relative">
      <input
        type="text"
        class="border border-gray-300 focus:border-mainColor outline-none text-sm rounded pl-3 pr-9 py-2 w-64"
        placeholder="Search customer"
        v-model="customerStore.query"
      />
      <IconSearch class="w-5 h-5 mr-2 absolute right-2 top-2" />
    </div>
  </div>
</template>
