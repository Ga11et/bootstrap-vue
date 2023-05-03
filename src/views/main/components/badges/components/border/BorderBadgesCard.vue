<template>
  <base-card :content="content.heading">
    <BorderBadge class="me-1" v-for="item in content.badges" :key="item.id" :content="item" />
  </base-card>
</template>
<script setup>
import { useBadgesStore } from '@/store/views/badges/badges'
import { computed } from 'vue'
import BorderBadge from './components/BorderBadge.vue'
const badgesStore = useBadgesStore()
const content = computed(() => badgesStore.getBorderBadges)
</script>
<style lang="css" scoped></style>
