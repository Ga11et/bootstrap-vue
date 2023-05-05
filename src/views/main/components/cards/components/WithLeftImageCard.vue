<template>
  <div class="card">
    <div class="row g-0">
      <div class="col-4">
        <img :src="content.image" :alt="content.heading" class="img-fluid rounded-start" />
      </div>
      <div class="col-8">
        <div class="card-body">
          <h3 class="card-title">{{ content.heading }}</h3>
          <p class="card-text">{{ content.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { getStore } from '../compositions/getStore'

const content = getStore('getWithLeftImageCard')
</script>
<style lang="css" scoped></style>
