<script setup>
import { useCustomerStore } from "@/stores/customerStore";
import CustomerData from "./CustomerData.vue";

const customerStore = useCustomerStore();
</script>

<template>
  <div class="mt-10">
    <!-- Apply border to table -->
    <table class="text-left w-full border-collapse text-sm">
      <thead>
        <tr class="*:font-medium *:border *:px-2 *:py-1 border-gray-500">
          <th>
            <p class="text-center">#</p>
          </th>
          <th>
            <p>First Name</p>
          </th>
          <th>
            <p>Last Name</p>
          </th>
          <th>
            <p>Email</p>
          </th>
          <th>
            <p>Phone</p>
          </th>
          <th class="hidden lg:table-cell">
            <p>State</p>
          </th>
          <th class="hidden lg:table-cell">
            <p>Status</p>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <CustomerData
          v-for="(customer, index) in customerStore.filteredCustomers"
          :customerData="customer"
          :index="index"
          :key="index"
        />
      </tbody>
    </table>
  </div>
</template>
