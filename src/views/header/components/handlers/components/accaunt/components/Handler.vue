<template>
  <a
    class="nav-link handler d-flex align-items-center pe-4"
    href="#"
    date-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <img class="d-block image rounded-circle me-2" :src="content.image" :alt="content.name" />
    <span class="dropdown-toggle name">{{ name }}</span>
  </a>
</template>
<script setup>
import { useHeaderStore } from '@/store/header'
import { computed } from 'vue'
const store = useHeaderStore()
const content = computed(() => store.getActiveAccaunt)
const name = computed(() => store.getSmallAccauntName)
</script>
<style lang="css" scoped>
.handler .image {
  width: 36px;
  height: 36px;
}
.handler .name {
  font-size: 14px;
  line-height: 14px;
  color: #012970;
  font-weight: 600;
}
</style>
