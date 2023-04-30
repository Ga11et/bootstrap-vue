<template>
  <DashboardCardLayout :content="content">
    <apexchart
      type="line"
      height="350"
      :options="content.options"
      :series="content.series"
    ></apexchart>
  </DashboardCardLayout>
</template>
<script setup>
import DashboardCardLayout from '../../layouts/DashboardCardLayout.vue'

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
})
</script>
<style lang="css" scoped>
::v-deep(.apexcharts-toolbar) {
  display: none;
}
</style>
