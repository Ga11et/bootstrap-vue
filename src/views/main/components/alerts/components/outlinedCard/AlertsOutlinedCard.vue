<template>
  <AlertsCardLayout :content="content.heading">
    <OutlinedAlert v-for="item in content.alerts" :key="item.id" :content="item" />
  </AlertsCardLayout>
</template>
<script setup>
import { useAlertsStore } from '@/store/views/components/alerts/alerts'
import { computed } from 'vue'
import AlertsCardLayout from '../../layouts/AlertsCardLayout.vue'
import OutlinedAlert from './components/OutlinedAlert.vue'
const alertsStore = useAlertsStore()
const content = computed(() => alertsStore.getOutlinedAlerts)
</script>
<style lang="css" scoped></style>
