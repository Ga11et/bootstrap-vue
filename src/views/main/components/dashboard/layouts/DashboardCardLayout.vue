<template>
  <div>
    <div class="card p-4 pt-0">
      <DashboardCardHeader :content="content" />
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import DashboardCardHeader from '../components/header/DashboardCardHeader.vue'

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
})
</script>
<style lang="css" scoped>
.card {
  border: none;
  box-shadow: 0px 0 30px rgb(1 41 112 / 10%);
}
</style>
