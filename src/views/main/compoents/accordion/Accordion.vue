<template>
  <base-heading :content="headingData" />
  <div class="row">
    <div class="col-6"><AccordionDefault /></div>
    <div class="col-6"><AccordionWithoutBorders /></div>
  </div>
</template>
<script setup>
import { useAccordionStore } from '@/store/views/accordion/accordion'
import { computed } from 'vue'
import AccordionDefault from './components/default/AccordionDefault.vue'
import AccordionWithoutBorders from './components/withoutBorders/AccordionWithoutBorders.vue'

const accordionStore = useAccordionStore()
const headingData = computed(() => accordionStore.getHeadingData)
</script>
<style lang="css" scoped></style>
