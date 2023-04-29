<template>
  <div class="cardHeader">
    <CardHeaderTitle :content="content" />
    <CardHeaderToggle class="rightTop" />
    <CardHeaderDropdownMenu :content="content" />
  </div>
</template>
<script setup>
import CardHeaderTitle from './components/CardHeaderTitle.vue'
import CardHeaderToggle from './components/CardHeaderToggle.vue'
import CardHeaderDropdownMenu from './components/CardHeaderDropdownMenu.vue'

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
})
</script>
<style lang="css" scoped>
.cardHeader {
  position: relative;
}
.cardHeader .rightTop {
  position: absolute;
  top: 18px;
  right: 0;
}
</style>
