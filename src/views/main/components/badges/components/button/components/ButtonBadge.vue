<template>
  <button class="btn" :class="`btn-${content.type}`">
    {{ content.text }}
    <span class="badge" :class="`text-${content.type} ${isLight ? 'bg-secondary' : 'bg-white'}`">{{
      content.badge
    }}</span>
  </button>
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
