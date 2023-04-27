<template>
  <li class="item">
    <NavItemHandler :content="content" />
    <NavItemSubmenu :content="content" />
  </li>
</template>
<script setup>
import NavItemHandler from './components/NavItemHandler.vue'
import NavItemSubmenu from './components/NavItemSubmenu.vue'
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
})
</script>
<style lang="css" scoped></style>
