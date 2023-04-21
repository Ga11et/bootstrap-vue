<template>
  <li class="dropdown-header px-4 py-2">
    You have {{ count }} new messages
    <a href="#"><span class="badge bg-primary rounded-pill p-2 ms-2">View All</span></a>
  </li>
  <hr class="dropdown-divider" />
</template>
<script setup>
import { useHeaderStore } from '@/store/header'
import { computed } from 'vue'
const store = useHeaderStore()
const count = computed(() => store.getMessagesCount)
</script>
<style lang="css" scoped></style>
