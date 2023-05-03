<template>
  <base-heading :content="headingData" />
  <div class="row">
    <div class="col-6">
      <div class="row gy-4">
        <div><DefaultBreadcrumbsCard /></div>
        <div><CenteredBreadcrumbsCard /></div>
        <div><RightBreadcrumbsCard /></div>
        <div><WithHomeIconBreadcrumbsCard /></div>
      </div>
    </div>
    <div class="col-6">
      <div class="row gy-4">
        <div><WithTitleBreadcrumbsCard /></div>
        <div><WithDividersBreadcumbsCard /></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useBreadcrumbsStore } from '@/store/views/components/breadcrumbs/breadcrumbs'
import { computed } from 'vue'
import DefaultBreadcrumbsCard from './components/DefaultBreadcrumbsCard.vue'
import CenteredBreadcrumbsCard from './components/CenteredBreadcrumbsCard.vue'
import RightBreadcrumbsCard from './components/RightBreadcrumbsCard.vue'
import WithHomeIconBreadcrumbsCard from './components/WithHomeIconBreadcrumbsCard.vue'
import WithTitleBreadcrumbsCard from './components/WithTitleBreadcrumbsCard.vue'
import WithDividersBreadcumbsCard from './components/WithDividersBreadcumbsCard.vue'
const breadcrumbsStore = useBreadcrumbsStore()
const headingData = computed(() => breadcrumbsStore.getHeadingData)
</script>
<style lang="css" scoped></style>
