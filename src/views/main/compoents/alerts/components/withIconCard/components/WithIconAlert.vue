<template>
  <div class="alert alert-dismissible fade show" :class="`alert-${content.type}`">
    <i class="me-2" :class="content.icon"></i>
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
