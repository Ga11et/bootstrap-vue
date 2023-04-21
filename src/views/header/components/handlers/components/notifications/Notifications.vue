<template>
  <li class="dropdown">
    <Handler />
    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
      <DropdownHeader />
      <Notification v-for="item in notifications" :key="item.id" :content="item" />
      <DropdownFooter />
    </ul>
  </li>
</template>
<script setup>
import { useHeaderStore } from '@/store/header'
import { computed } from 'vue'
import DropdownFooter from './components/DropdownFooter.vue'
import DropdownHeader from './components/DropdownHeader.vue'
import Handler from './components/Handler.vue'
import Notification from './components/Notification.vue'
const store = useHeaderStore()
const notifications = computed(() => store.getNotifications)
</script>
<style lang="css" scoped></style>
