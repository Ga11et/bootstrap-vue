<template>
  <base-card :content="content.heading">
    <div class="accordion" id="defaultAccordion">
      <DefaultItem v-for="item in content.items" :content="item" :key="item.id" />
    </div>
  </base-card>
</template>
<script setup>
import { useAccordionStore } from '@/store/views/components/accordion/accordion'
import { computed } from 'vue'
import DefaultItem from './components/DefaultItem.vue'

const accordionStore = useAccordionStore()
const content = computed(() => accordionStore.getDefaultAccordion)
</script>
<style lang="css" scoped></style>
