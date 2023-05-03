<template>
  <base-heading :content="headingData" />
  <div class="row">
    <div class="col-6">
      <div class="row gy-4">
        <div><DefaultButtonsCard /></div>
        <div><RoundedButtonsCard /></div>
        <div><IconButtonsCard /></div>
        <div><GroupedButtonsCard /></div>
      </div>
    </div>
    <div class="col-6">
      <div class="row gy-4">
        <div><OutlinedButtonsCard /></div>
        <div><SizedButtonsCard /></div>
        <div><StatedButtonsCard /></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useButtonsStore } from '@/store/views/components/buttons/buttons'
import { computed } from 'vue'
import DefaultButtonsCard from './components/DefaultButtonsCard.vue'
import IconButtonsCard from './components/IconButtonsCard.vue'
import RoundedButtonsCard from './components/RoundedButtonsCard.vue'
import OutlinedButtonsCard from './components/OutlinedButtonsCard.vue'
import SizedButtonsCard from './components/SizedButtonsCard.vue'
import StatedButtonsCard from './components/StatedButtonsCard.vue'
import GroupedButtonsCard from './components/GroupedButtonsCard.vue'
const buttonsStore = useButtonsStore()
const headingData = computed(() => buttonsStore.getHeadingData)
</script>
<style lang="css" scoped></style>
