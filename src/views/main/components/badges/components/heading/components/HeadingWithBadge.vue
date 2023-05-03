<template>
  <component :is="content.headingType" class="font-default">
    {{ content.heading }}
    <span class="badge" :class="`text-bg-${content.type}`">{{ content.text }}</span>
  </component>
</template>
<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
})
</script>
<style lang="css" scoped>
.font-default {
  font-family: inherit;
}
</style>
