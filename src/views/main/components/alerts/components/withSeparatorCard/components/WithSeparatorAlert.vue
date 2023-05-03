<template>
  <div class="alert alert-dismissible fade show" :class="`alert-${content.type}`">
    <h3 class="alert-heading">{{ content.heading }}</h3>
    <p>{{ content.text }}</p>
    <hr />
    <p class="mb-0">{{ content.subtext }}</p>
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
<style lang="css" scoped>
.alert .alert-heading {
  font-weight: 500;
  font-size: 20px;
}
</style>
