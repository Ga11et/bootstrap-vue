<template>
  <div class="cards">
    <base-heading :content="content" />
    <div class="row">
      <div class="col-6">
        <div class="row gy-4">
          <div><DefaultCard /></div>
          <div><WithHeaderAndFooterCard /></div>
          <div><WithLeftImageCard /></div>
        </div>
      </div>
      <div class="col-3">
        <div class="row gy-4">
          <div><WithTopImageCard /></div>
          <div><WithBottomImageCard /></div>
        </div>
      </div>
      <div class="col-3">
        <div class="row gy-4">
          <div><WithOverlayImageCard /></div>
          <div><WithTitlesButtonsLinksCard /></div>
          <div><SpecialCard /></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import DefaultCard from './components/DefaultCard.vue'
import WithHeaderAndFooterCard from './components/WithHeaderAndFooterCard.vue'
import WithLeftImageCard from './components/WithLeftImageCard.vue'
import WithTopImageCard from './components/WithTopImageCard.vue'
import WithBottomImageCard from './components/WithBottomImageCard.vue'
import WithOverlayImageCard from './components/WithOverlayImageCard.vue'
import { getStore } from './compositions/getStore'
import WithTitlesButtonsLinksCard from './components/WithTitlesButtonsLinksCard.vue'
import SpecialCard from './components/SpecialCard.vue'

const content = getStore('getHeadingData')
</script>
<style lang="css" scoped>
.cards :deep(.card) {
  border: none;
  box-shadow: 0px 0 30px #0129701a;
}
.cards :deep(.card .card-body) {
  padding-top: 0;
}
.cards :deep(.card .card-body .card-title) {
  padding: 20px 0 15px 0;
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #012970;
}
</style>
