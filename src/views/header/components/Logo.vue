<template>
  <div class="menu d-flex align-items-center justify-content-between">
    <a class="logo d-flex align-items-center justify-content-start ps-4" href="#">
      <img class="image d-block" :src="logo" alt="logo" />
      <span class="text d-none d-lg-block">NiceAdmin</span>
    </a>
    <i class="bi bi-list"></i>
  </div>
</template>
<script setup>
import { useHeaderStore } from '@/store/header'
import { computed } from 'vue'

const store = useHeaderStore()
const logo = computed(() => store.getLogo)
</script>
<style lang="css" scoped>
.menu .text {
  font-size: 26px;
  line-height: 26px;
  font-weight: 700;
  color: #012970;
}
.menu .logo {
  text-decoration: none;
  width: 300px;
}
.menu .logo .image {
  max-height: 26px;
  margin-right: 6px;
}
.menu .bi-list {
  font-size: 2em;
}
.menu .bi-list:hover {
  cursor: pointer;
}
</style>
