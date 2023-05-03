<template>
  <base-card :content="content.heading">
    <PillBadge class="me-1" v-for="item in content.badges" :key="item.id" :content="item" />
  </base-card>
</template>
<script setup>
import { useBadgesStore } from '@/store/views/badges/badges'
import { computed } from 'vue'
import PillBadge from './components/PillBadge.vue'
const badgesStore = useBadgesStore()
const content = computed(() => badgesStore.getPillBadges)
</script>
<style lang="css" scoped></style>
