<template>
  <div class="dashboard">
    <base-heading :content="headingData" />
    <div class="row">
      <div class="col-8 row">
        <DashboardSmallCard v-for="item in smallCardsData" :key="item.id" :content="item" />
      </div>
      <div class="col-4"></div>
    </div>
  </div>
</template>
<script setup>
import { useDashboardStore } from '@/store/views/dashboard'
import { computed } from 'vue'
import DashboardSmallCard from './components/DashboardSmallCard.vue'
const dashboardStore = useDashboardStore()
const headingData = computed(() => dashboardStore.getHeadingData)
const smallCardsData = computed(() => dashboardStore.getSmallCardsData)
</script>
<style lang="css" scoped></style>
