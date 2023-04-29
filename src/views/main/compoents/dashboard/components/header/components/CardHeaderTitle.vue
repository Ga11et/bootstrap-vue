<template>
  <h2 class="card-title">
    {{ content.heading }}
    <span class="filter">| {{ content.filter }}</span>
  </h2>
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
.card-title {
  padding: 20px 0 15px 0;
  font-size: 18px;
  font-weight: 500;
  color: #012970;
}
.card-title .filter {
  color: #899bbd;
  font-size: 14px;
  font-weight: 400;
}
</style>
