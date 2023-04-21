<template>
  <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown" aria-expanded="false">
    <i class="bi bi-bell"></i>
    <span class="badge bg-primary badge-number">{{ count }}</span>
  </a>
</template>
<script setup>
import { useHeaderStore } from '@/store/header'
import { computed } from 'vue'
const store = useHeaderStore()
const count = computed(() => store.getNotificationsCount)
</script>
<style lang="css" scoped>
.nav-icon .bi-bell {
  font-size: 1.7em;
}
.nav-icon .badge {
  position: absolute;
  inset: -2px -7px auto auto;
}
</style>
