<template>
  <div class="alert alert-dismissible fade show" :class="`alert-${content.type}`">
    {{ content.text }}
    <button class="btn-close" data-bs-dismiss="alert" area-label="close"></button>
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
