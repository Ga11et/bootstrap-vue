<template>
  <div class="card">
    <img :src="content.image" :alt="content.heading" class="card-img-top" />
    <div class="card-img-overlay px-1">
      <div class="card-body">
        <h3 class="card-title">{{ content.heading }}</h3>
        <p class="card-text">{{ content.text }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { getStore } from '../compositions/getStore'

const content = getStore('getWithOverlayImageCard')
</script>
<style lang="css" scoped>
.card .card-img-overlay {
  background-color: rgba(255, 255, 255, 0.6);
}
</style>
