<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div class="text-[40px] font-bold text-black">
    {{ title }}
  </div>
</template>
<style></style>
