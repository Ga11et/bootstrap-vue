<template>
  <base-card :content="content.heading">
    <div class="accordion accordion-flush" id="withoutBordersAccordion">
      <WithoutBordersItem v-for="item in content.items" :key="item.id" :content="item" />
    </div>
  </base-card>
</template>
<script setup>
import { useAccordionStore } from '@/store/views/components/accordion/accordion'
import { computed } from 'vue'
import WithoutBordersItem from './components/WithoutBordersItem.vue'
const accordionStore = useAccordionStore()
const content = computed(() => accordionStore.getWithoutBordersAccordion)
</script>
<style lang="css" scoped></style>
