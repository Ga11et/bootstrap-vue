<template>
  <a class="icon nav-link" href="#" data-bs-toggle="dropdown" aria-expanded="false">
    <i class="bi bi-chat-left-text"></i>
    <span class="badge bg-success badge-number">{{ count }}</span>
  </a>
</template>
<script setup>
import { computed } from 'vue'
import { useHeaderStore } from '@/store/header'

const store = useHeaderStore()
const count = computed(() => store.getMessagesCount)
</script>
<style lang="css" scoped>
.icon {
  font-size: 1.6em;
  position: relative;
}
.icon .badge {
  font-size: 12px;
  position: absolute;
  inset: -3px -4px auto auto;
}
</style>
