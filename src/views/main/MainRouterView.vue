<template>
  <main :class="['mainRouterView py-3 px-4', { active: active }]">
    <router-view></router-view>
  </main>
</template>
<script setup>
import { useSidebarStore } from '@/store/sidebar'
import { computed } from 'vue'
const store = useSidebarStore()
const active = computed(() => store.getSidebarActive)
</script>
<style lang="css" scoped>
.mainRouterView {
  margin-top: 60px;
  transition: 300ms;
  background-color: #f6f9ff;
  min-height: 100vh;
}
.mainRouterView.active {
  margin-left: 300px;
  transition: 300ms;
}
</style>
