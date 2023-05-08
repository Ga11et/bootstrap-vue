<template>
  <base-heading :content="content" />
  <div class="row">
    <div class="col-6">
      <div class="row g-4">
        <div><DefaultCarousel /></div>
        <div><WithIndicatorsCarousel /></div>
        <div><WithFadeCarousel /></div>
      </div>
    </div>
    <div class="col-6">
      <div class="row g-4">
        <div><WithControlsCarousel /></div>
        <div><WithCaptionsCarousel /></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { getCarouselStore } from './composites/getCarouselStore'
import DefaultCarousel from './components/DefaultCarousel.vue'
import WithControlsCarousel from './components/WithControlsCarousel.vue'
import WithIndicatorsCarousel from './components/WithIndicatorsCarousel.vue'
import WithFadeCarousel from './components/WithFadeCarousel.vue'
import WithCaptionsCarousel from './components/WithCaptionsCarousel.vue'

const content = getCarouselStore('getHeadingData')
</script>
<style lang="css" scoped></style>
