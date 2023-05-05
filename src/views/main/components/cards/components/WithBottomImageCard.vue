<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">{{ content.heading }}</h3>
      <p class="card-text">{{ content.text }}</p>
    </div>
    <img :src="content.image" :alt="content.heading" class="card-img-bottom" />
  </div>
</template>
<script setup>
import { getStore } from '../compositions/getStore'

const content = getStore('getWithBottomImageCard')
</script>
<style lang="css" scoped></style>
