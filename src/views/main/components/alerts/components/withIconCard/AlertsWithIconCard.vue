<template>
  <AlertsCardLayout :content="content.heading">
    <WithIconAlert v-for="item in content.alerts" :key="item.id" :content="item" />
  </AlertsCardLayout>
</template>
<script setup>
import { useAlertsStore } from '@/store/views/components/alerts/alerts'
import { computed } from 'vue'
import AlertsCardLayout from '../../layouts/AlertsCardLayout.vue'
import WithIconAlert from './components/WithIconAlert.vue'
const alertsStore = useAlertsStore()
const content = computed(() => alertsStore.getWithIconAlerts)
</script>
<style lang="css" scoped></style>
