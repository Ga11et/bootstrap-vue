<template>
  <div class="card">
    <div class="card-header">{{ content.header }}</div>
    <div class="card-body">
      <h3 class="card-title">{{ content.heading }}</h3>
      <p class="card-text">{{ content.text }}</p>
    </div>
    <div class="card-footer">{{ content.footer }}</div>
  </div>
</template>
<script setup>
import { getStore } from '../compositions/getStore'

const content = getStore('getWithHeaderAndFooterCard')
</script>
<style lang="css" scoped>
.card .card-header,
.card .card-footer {
  border-color: #ebeef4;
  background-color: #fff;
  color: #798eb3;
  padding: 15px;
}
</style>
