<template>
  <base-heading :content="headingData" />
  <div class="row">
    <div class="col-6">
      <div class="row gy-4">
        <div><DefaultBadgesCard /></div>
        <div><PillBadgesCard /></div>
        <div><IconBadgesCard /></div>
      </div>
    </div>
    <div class="col-6">
      <div class="row gy-4">
        <div><BorderBadgesCard /></div>
        <div><ButtonBadgesCard /></div>
        <div><HeadingBadgesCard /></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useBadgesStore } from '@/store/views/badges/badges'
import { computed } from 'vue'
import BorderBadgesCard from './components/border/BorderBadgesCard.vue'
import ButtonBadgesCard from './components/button/ButtonBadgesCard.vue'
import DefaultBadgesCard from './components/default/DefaultBadgesCard.vue'
import HeadingBadgesCard from './components/heading/HeadingBadgesCard.vue'
import IconBadgesCard from './components/icon/IconBadgesCard.vue'
import PillBadgesCard from './components/pill/PillBadgesCard.vue'
const badgesStore = useBadgesStore()
const headingData = computed(() => badgesStore.getHeadingData)
</script>
<style lang="css" scoped></style>
