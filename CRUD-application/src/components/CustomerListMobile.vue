<script setup>
import { useCustomerStore } from "@/stores/customerStore";
import CustomerDataMobile from "./CustomerDataMobile.vue";

const customerStore = useCustomerStore();
</script>

<template>
  <div class="flex flex-wrap gap-5 divide-y mt-10">
    <CustomerDataMobile
      v-for="(customer, index) in customerStore.filteredCustomers"
      :data="customer"
      :index="index"
      :key="index"
    />
  </div>
</template>