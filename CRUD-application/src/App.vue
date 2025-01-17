<script setup>
import SideBar from './components/SideBar.vue'
import SearchAdd from './components/SearchAdd.vue'
</script>

<template>
  <div>
    <SideBar />
    <main class="ml-64 p-10">
      <h1 class="text-3xl font-medium mb-5">Customers</h1>
      <div class="bg-white shadow-lg p-5 rounded-lg">
        <SearchAdd />
      </div>
    </main>
  </div>
</template>
