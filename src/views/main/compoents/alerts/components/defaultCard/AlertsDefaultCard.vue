<template>
  <AlertsCardLayout :content="content.heading">
    <DefaultAlert v-for="item in content.alerts" :key="item.id" :content="item" />
  </AlertsCardLayout>
</template>
<script setup>
import AlertsCardLayout from '../../layouts/AlertsCardLayout.vue'
import DefaultAlert from './components/DefaultAlert.vue'
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
})
</script>
<style lang="css" scoped></style>
