<template>
  <div class="alert alert-dismissible fade show" :class="`border-${content.type}`">
    <span>{{ content.text }}</span>
    <button class="btn-close" data-bs-dismiss="alert"></button>
  </div>
</template>
<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
})
</script>
<style lang="css" scoped></style>
