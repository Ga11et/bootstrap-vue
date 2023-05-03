<template>
  <base-card :content="content.heading">
    <DefaultBadge class="me-1" v-for="item in content.badges" :key="item.id" :content="item" />
  </base-card>
</template>
<script setup>
import { useBadgesStore } from '@/store/views/components/badges/badges'
import { computed } from 'vue'
import DefaultBadge from './components/DefaultBadge.vue'
const badgesStore = useBadgesStore()
const content = computed(() => badgesStore.getDefaultBadges)
</script>
<style lang="css" scoped></style>
