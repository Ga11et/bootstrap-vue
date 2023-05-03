<template>
  <span class="badge" :class="`text-bg-${content.type}`">{{ content.text }}</span>
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
