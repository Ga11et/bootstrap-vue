<template>
  <transition name="sidebar">
    <aside v-if="active" class="sidebar">
      <ul id="sidebar-nav" class="sidebar-nav p-3">
        <NavItem v-for="item in nav" :key="item.id" :content="item" />
      </ul>
    </aside>
  </transition>
</template>
<script setup>
import { useSidebarStore } from '@/store/sidebar'
import { computed } from 'vue'
import NavItem from './components/navitem/NavItem.vue'

const sidebarStore = useSidebarStore()
const active = computed(() => sidebarStore.getSidebarActive)
const nav = computed(() => sidebarStore.getSidebarNav)
</script>
<style lang="css" scoped>
.sidebar-enter-active,
.sidebar-leave-active {
  transition: all 0.3s ease;
}
.sidebar-enter-from,
.sidebar-leave-to {
  transform: translate(-300px, 0);
}
.sidebar {
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 300px;
  z-index: 996;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #aab7cf transparent;
  box-shadow: 0px 0px 20px #0129701a;
  background-color: white;
}
.sidebar .sidebar-nav {
  list-style-type: none;
}
</style>
