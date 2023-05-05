<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">{{ content.heading }}</h3>
      <h4 class="card-subtitle mb-2 text-muted h6">{{ content.subHeading }}</h4>
      <p class="card-text">{{ content.text }}</p>
      <p class="card-text">
        <button class="btn" :class="`btn-${content.button.type}`">{{ content.button.text }}</button>
      </p>
      <p class="card-text">
        <a class="card-link" v-for="item in content.links" :key="item.id" :href="item.href">{{
          item.text
        }}</a>
      </p>
    </div>
  </div>
</template>
<script setup>
import { getStore } from '../compositions/getStore'

const content = getStore('getWithTitleButtonsLinksCard')
</script>
<style lang="css" scoped>
.card .card-body .card-text .card-link {
  text-decoration: none;
}
</style>
