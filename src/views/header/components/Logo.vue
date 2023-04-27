<template>
  <div class="menu d-flex align-items-center justify-content-between">
    <a class="logo d-flex align-items-center justify-content-start ps-4" href="#">
      <img class="image d-block" :src="logo" alt="logo" />
      <span class="text d-none d-lg-block">NiceAdmin</span>
    </a>
    <i @click="toggleSidebar" class="bi bi-list toggle-sidebar-btn"></i>
  </div>
</template>
<script setup>
import { useHeaderStore } from '@/store/header'
import { useSidebarStore } from '@/store/sidebar'
import { computed } from 'vue'

const headerStore = useHeaderStore()
const sidebarStore = useSidebarStore()
const logo = computed(() => headerStore.getLogo)
const toggleSidebar = sidebarStore.toggleActiveSidebar
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
