<template>
  <p v-if="content.change >= 0" class="subtext m-0">
    <span class="text-success pe-2 fw-bold">{{ content.change }}%</span>
    <span class="text-muted">increase</span>
  </p>
  <p v-else class="subtext text-muted m-0">
    <span class="text-danger pe-2 fw-bold">{{ content.change }}%</span>
    <span class="text-muted">decrease</span>
  </p>
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
.subtext {
  font-size: 14px;
  line-height: 21px;
}
</style>
