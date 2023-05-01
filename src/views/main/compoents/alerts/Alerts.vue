<template>
  <div class="mb-5">
    <base-heading :content="headingData" />
    <div class="row">
      <div class="col-6">
        <div class="row gy-4">
          <div><AlertsDefaultCard :content="defaultCardData" /></div>
          <div><AlertsWithIconCard /></div>
          <div><AlertsOutlinedCard /></div>
        </div>
      </div>
      <div class="col-6">
        <div class="row gy-4">
          <div><AlertsFilledCard /></div>
          <div><AlertsWithSeparatorCard /></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useAlertsStore } from '@/store/views/alerts/alerts'
import { computed } from 'vue'
import AlertsDefaultCard from './components/defaultCard/AlertsDefaultCard.vue'
import AlertsFilledCard from './components/filledCard/AlertsFilledCard.vue'
import AlertsOutlinedCard from './components/outlinedCard/AlertsOutlinedCard.vue'
import AlertsWithIconCard from './components/withIconCard/AlertsWithIconCard.vue'
import AlertsWithSeparatorCard from './components/withSeparatorCard/AlertsWithSeparatorCard.vue'

const alertsStore = useAlertsStore()
const headingData = computed(() => alertsStore.getHeadingData)
const defaultCardData = computed(() => alertsStore.getDefaultAlerts)
</script>
<style lang="css" scoped></style>
