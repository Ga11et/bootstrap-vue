<template>
  <base-card :content="content.heading">
    <IconBadge class="me-1" v-for="item in content.badges" :key="item.id" :content="item" />
  </base-card>
</template>
<script setup>
import { useBadgesStore } from '@/store/views/components/badges/badges'
import { computed } from 'vue'
import IconBadge from './components/IconBadge.vue'
const badgesStore = useBadgesStore()
const content = computed(() => badgesStore.getIconBadges)
</script>
<style lang="css" scoped></style>
