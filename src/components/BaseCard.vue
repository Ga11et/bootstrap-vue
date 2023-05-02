<template>
  <div class="card">
    <div class="card-body">
      <h2 class="card-title m-0 my-2">{{ content }}</h2>
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  content: {
    type: String,
    required: true,
  },
})
</script>
<style lang="css" scoped>
.card {
  box-shadow: 0px 0 30px #0129701a;
}
.card .card-body .card-title {
  padding: 0 0 15px 0;
  font-size: 18px;
  font-weight: 500;
  color: #012970;
}
</style>
