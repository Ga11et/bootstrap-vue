<template>
  <li class="pe-4">
    <Handler />
    <ul class="dropdown-menu dropdown-menu-end">
      <AccauntHeader />
      <Item v-for="item in nav" :key="item.id" :content="item" />
    </ul>
  </li>
</template>
<script setup>
import AccauntHeader from './components/AccauntHeader.vue'
import Handler from './components/Handler.vue'
import Item from './components/Item.vue'
import { useHeaderStore } from '@/store/header'
import { computed } from 'vue'
const store = useHeaderStore()
const nav = computed(() => store.getAccauntNav)
</script>
<style lang="css" scoped></style>
