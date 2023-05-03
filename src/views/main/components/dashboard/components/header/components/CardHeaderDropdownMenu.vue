<template>
  <ul class="dropdown-menu dropdown-menu-end">
    <li class="dropdown-header">Filter</li>
    <li v-for="item in content.filterNav" :key="item.id">
      <a class="dropdown-item" href="#">{{ item.text }}</a>
    </li>
  </ul>
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
.dropdown-menu {
  border: none;
  box-shadow: 0 5px 30px 0 #523f6933;
}
.dropdown-menu .dropdown-header {
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #aab7cf;
}
</style>
