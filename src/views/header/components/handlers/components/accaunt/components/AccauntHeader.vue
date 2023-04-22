<template>
  <li class="dropdown-header px-4">
    <h4 class="heading text-center">{{ accaunt.name }}</h4>
    <p class="work text-center pt-2 m-0">{{ accaunt.work }}</p>
  </li>
  <hr class="dropdown-divider" />
</template>
<script setup>
import { useHeaderStore } from '@/store/header'
import { computed } from 'vue'
const store = useHeaderStore()
const accaunt = computed(() => store.getActiveAccaunt)
</script>
<style lang="css" scoped>
.dropdown-header .heading {
  font-size: 18px;
  line-height: 18px;
  margin-bottom: 0;
  font-weight: 600;
  color: #444444;
  min-width: 200px;
}
.dropdown-header .work {
  font-size: 14px;
  line-height: 14px;
}
</style>
