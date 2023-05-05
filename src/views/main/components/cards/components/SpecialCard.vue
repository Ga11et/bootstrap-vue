<template>
  <div class="card text-center">
    <div class="card-header">
      <ul class="nav nav-pills card-header-pills">
        <li class="nav-item" v-for="item in content.nav" :key="item.id">
          <a class="nav-link" :class="{ active: item.active, disabled: item.disabled }" href="#">{{
            item.text
          }}</a>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <h3 class="card-title">{{ content.heading }}</h3>
      <p class="card-text">{{ content.text }}</p>
      <p class="card-text">
        <button class="btn" :class="`btn-${content.button.type}`">{{ content.button.text }}</button>
      </p>
    </div>
  </div>
</template>
<script setup>
import { getStore } from '../compositions/getStore'

const content = getStore('getSpecialCard')
</script>
<style lang="css" scoped>
.card .card-header {
  border-color: #ebeef4;
  background-color: #fff;
  color: #798eb3;
  padding: 15px;
}
.card .card-body .card-text .card-link {
  text-decoration: none;
}
</style>
