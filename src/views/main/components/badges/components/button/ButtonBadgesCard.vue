<template>
  <base-card :content="content.heading">
    <ButtonBadge class="me-1 mb-1" v-for="item in content.badges" :key="item.id" :content="item" />
  </base-card>
</template>
<script setup>
import { useBadgesStore } from '@/store/views/badges/badges'
import { computed } from 'vue'
import ButtonBadge from './components/ButtonBadge.vue'
const badgesStore = useBadgesStore()
const content = computed(() => badgesStore.getButtonBadges)
</script>
<style lang="css" scoped></style>
