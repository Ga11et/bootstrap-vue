<template>
  <div :class="['mainRouterView', { active: active }]">
    <router-view></router-view>
  </div>
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
}
.mainRouterView.active {
  margin-left: 330px;
  transition: 300ms;
}
</style>
