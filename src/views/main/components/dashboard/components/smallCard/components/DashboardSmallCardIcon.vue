<template>
  <div
    v-if="content.type === 'sales'"
    class="image card-icon rounded-circle d-flex align-items-center justify-content-center me-3"
    style="background-color: #f6f6fe; color: #4154f1"
  >
    <i class="bi bi-cart"></i>
  </div>
  <div
    v-if="content.type === 'revenue'"
    class="image card-icon rounded-circle d-flex align-items-center justify-content-center me-3"
    style="background-color: #e0f8e9; color: #2eca6a"
  >
    <i class="bi bi-currency-dollar"></i>
  </div>
  <div
    v-if="content.type === 'customers'"
    class="image card-icon rounded-circle d-flex align-items-center justify-content-center me-3"
    style="background-color: #ffecdf; color: #ff771d"
  >
    <i class="bi bi-people"></i>
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
.image {
  font-size: 32px;
  width: 64px;
  height: 64px;
}
</style>
