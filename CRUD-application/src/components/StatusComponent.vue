<script setup>
const props = defineProps({
  status: Boolean,
});
</script>

<template>
  <div class="px-2 py-1.5 w-fit rounded-md mt-2.5 text-xs" :class="status ? 'bg-green-100' : 'bg-red-100'">
    <!-- make the dot glow -->
     <p :class="status ? 'text-green-500' : 'text-red-500'">{{ status ? 'Active' : 'Inactive' }}</p>
  </div>
</template>