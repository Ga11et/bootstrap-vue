<template>
  <DashboardCardLayout :content="content">
    <DataTable :data="content.data">
      <thead>
        <tr>
          <th>#</th>
          <th>Customer</th>
          <th>Product</th>
          <th>Price</th>
          <th>Status</th>
        </tr>
      </thead>
    </DataTable>
  </DashboardCardLayout>
</template>
<script setup>
import DashboardCardLayout from '../../layouts/DashboardCardLayout.vue'
import DataTable from 'datatables.net-vue3'
import DataTablesCore from 'datatables.net'
import { useDashboardStore } from '@/store/views/dashboard/dashboard'
import { computed } from 'vue'
DataTable.use(DataTablesCore)

const dashboardStore = useDashboardStore()
const content = computed(() => dashboardStore.getRecentSales)
</script>
<style lang="css" scoped></style>
