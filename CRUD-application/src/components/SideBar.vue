<script setup>
import TheLogo from './TheLogo.vue'
import IconCustomer from './IconCustomers.vue'
import IconDashboard from './IconDashboard.vue'
</script>

<template>
  <div class="bg-white fixed top-0 left-0 w-64 h-full shadow-lg p-5">
    <div class="mb-5">
      <TheLogo class=" w-32" alt="logo" />
    </div>
    <div class="*:text-sm">
      <p class="text-gray-500">Main Menu</p>
      <ul class="space-y-2.5 mt-2 ml-2.5">
        <li>
          <a class="flex items-center group hover:text-mainColor w-fit" href="#">
            <IconDashboard class="w-5 h-5 mr-2 group-hover:fill-mainColor fill-black" />
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a class="flex items-center hover:text-mainColor w-fit" href="#">
            <IconCustomer class="w-5 h-5 mr-2 stroke-mainColor" />
            <span>Customers</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>