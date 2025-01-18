<script setup>
import { useCustomerStore } from "./stores/customerStore";
import { ModalsContainer } from "vue-final-modal";
import SideBar from "./components/SideBar.vue";
import SearchAdd from "./components/SearchAdd.vue";
import CustomerTable from "./components/CustomerTable.vue";
import HeaderView from "./components/HeaderView.vue";
import CustomerListMobile from "./components/CustomerListMobile.vue";
import NotFound from "./components/NotFound.vue";

const customerStore = useCustomerStore();
</script>

<template>
  <div>
    <ModalsContainer />
    <SideBar />

    <HeaderView class="lg:hidden" />
    <main class="lg:ml-64 py-7 px-5">
      <h1 class="text-3xl font-medium mb-5">Customers</h1>
      <div class="bg-white shadow-lg p-5 rounded-lg">
        <SearchAdd />

        <div v-if="customerStore.filteredCustomers.length">
          <CustomerTable class="hidden lg:block" />

          <CustomerListMobile class="lg:hidden" />
        </div>

        <NotFound v-else /> 
      </div>
    </main>
  </div>
</template>
