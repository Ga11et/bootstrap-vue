<template>
  <li class="dropdown-header">
    You have {{ count }} new notifications
    <a href="#">
      <span class="badge rounded-pill bg-primary p-2 ms-2">View all</span>
    </a>
  </li>
  <hr class="dropdown-divider" />
</template>
<script setup>
import { computed } from 'vue'
import { useHeaderStore } from '@/store/header'

const store = useHeaderStore()
const count = computed(() => store.getNotificationsCount)
</script>
<style lang="css" scoped>
.dropdown-header {
  padding: 0.5em 2em;
}
</style>
