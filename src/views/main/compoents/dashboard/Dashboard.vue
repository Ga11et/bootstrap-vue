<template>
  <div class="dashboard">
    <base-heading :content="headingData" />
    <div class="row">
      <div class="col-8 row g-4 mt-0">
        <DashboardSmallCard
          class="mt-0"
          v-for="item in smallCardsData"
          :key="item.id"
          :content="item"
        />
        <DashboardApexChart :content="apexChartData" />
        <DashboardRecentSalesCard />
      </div>
      <div class="col-4"></div>
    </div>
  </div>
</template>
<script setup>
import { useDashboardStore } from '@/store/views/dashboard'
import { computed } from 'vue'
import DashboardApexChart from './components/chart/DashboardApexChart.vue'
import DashboardRecentSalesCard from './components/recentSales/DashboardRecentSalesCard.vue'
import DashboardSmallCard from './components/smallCard/DashboardSmallCard.vue'
const dashboardStore = useDashboardStore()
const headingData = computed(() => dashboardStore.getHeadingData)
const smallCardsData = computed(() => dashboardStore.getSmallCardsData)
const apexChartData = computed(() => dashboardStore.getApexChartData)
</script>
<style lang="css" scoped></style>
