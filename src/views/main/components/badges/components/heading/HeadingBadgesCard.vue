<template>
  <base-card :content="content.heading">
    <HeadingWithBadge v-for="item in content.badges" :key="item.id" :content="item" />
  </base-card>
</template>
<script setup>
import { useBadgesStore } from '@/store/views/badges/badges'
import { computed } from 'vue'
import HeadingWithBadge from './components/HeadingWithBadge.vue'
const badgesStore = useBadgesStore()
const content = computed(() => badgesStore.getHeadingBadges)
</script>
<style lang="css" scoped></style>
