<template>
  <div class="card">
    <img :src="content.image" :alt="content.heading" class="card-img-top" />
    <div class="card-body">
      <h3 class="card-title">{{ content.heading }}</h3>
      <p class="card-text">{{ content.text }}</p>
    </div>
  </div>
</template>
<script setup>
import { getStore } from '../compositions/getStore'

const content = getStore('getWithTopImageCard')
</script>
<style lang="css" scoped></style>
