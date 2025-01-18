<script setup>
import TheLogo from './TheLogo.vue';
</script>

<template>
  <div class="bg-white px-5 py-2.5 flex justify-between">
    <TheLogo class="w-28" alt="logo" />
    <button class="lg:hidden">
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
    </button>
  </div>
</template>