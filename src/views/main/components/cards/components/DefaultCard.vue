<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">{{ content.heading }}</h3>
      <p class="card-text">{{ content.text }}</p>
    </div>
  </div>
</template>
<script setup>
import { getStore } from '../compositions/getStore'

const content = getStore('getDefaultCard')
</script>
<style lang="css" scoped></style>
