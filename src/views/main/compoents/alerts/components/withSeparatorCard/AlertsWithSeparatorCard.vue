<template>
  <AlertsCardLayout :content="content.heading">
    <WithSeparatorAlert v-for="item in content.alerts" :key="item.id" :content="item" />
  </AlertsCardLayout>
</template>
<script setup>
import { useAlertsStore } from '@/store/views/alerts/alerts'
import { computed } from 'vue'
import AlertsCardLayout from '../../layouts/AlertsCardLayout.vue'
import WithSeparatorAlert from './components/WithSeparatorAlert.vue'
const alertStore = useAlertsStore()
const content = computed(() => alertStore.getWithSeparatorAlerts)
</script>
<style lang="css" scoped></style>
