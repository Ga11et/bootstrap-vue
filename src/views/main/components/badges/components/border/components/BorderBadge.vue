<template>
  <span
    class="badge border border-1"
    :class="`text-${content.type} border-${content.type}${isLight ? ' text-black-50' : ''}`"
  >
    {{ content.text }}
  </span>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
})
const isLight = computed(() => props.content.type === 'light')
</script>
<style lang="css" scoped></style>
