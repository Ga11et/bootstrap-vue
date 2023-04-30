<template>
  <div class="col-4">
    <div class="card p-4 pt-0">
      <DashboardCardHeader :content="content" />
      <div class="d-flex align-items-center">
        <DashboardSmallCardIcon :content="content" />
        <div class="d-flex flex-column justify-between">
          <p class="mainText">{{ content.amount }}</p>
          <DashboardSmallCardSubtext :content="content" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import DashboardCardHeader from '../header/DashboardCardHeader.vue'
import DashboardSmallCardIcon from './components/DashboardSmallCardIcon.vue'
import DashboardSmallCardSubtext from './components/DashboardSmallCardSubtext.vue'
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
})
</script>
<style lang="css" scoped>
.card {
  border: none;
  box-shadow: 0px 0 30px rgb(1 41 112 / 10%);
}
.card .mainText {
  font-size: 28px;
  color: #012970;
  font-weight: 700;
  margin: 0;
  padding: 0;
}
</style>
