<template>
  <div
    class="alert alert-dismissible fade show border-0"
    :class="`bg-${content.type} alert-${content.type}`"
  >
    <span
      v-if="['primary', 'secondary', 'success', 'danger', 'dark'].includes(content.type)"
      class="text-light"
    >
      {{ content.text }}
    </span>
    <span v-else>{{ content.text }}</span>
    <button
      v-if="['primary', 'secondary', 'success', 'danger', 'dark'].includes(content.type)"
      class="btn-close btn-close-white"
      data-bs-dismiss="alert"
    ></button>
    <button v-else class="btn-close" data-bs-dismiss="alert"></button>
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
