<template>
  <li>
    <Handler />
    <ul class="dropdown-menu dropdown-menu-end">
      <AccauntHeader />
      <Item />
    </ul>
  </li>
</template>
<script setup>
import AccauntHeader from './components/AccauntHeader.vue'
import Handler from './components/Handler.vue'
import Item from './components/Item.vue'
</script>
<style lang="css" scoped></style>
