<template>
  <base-card :content="content.heading">
    <button
      v-for="item in content.buttons"
      :key="item.id"
      class="btn me-1 mb-1"
      :class="`btn-${item.type}${
        item.size === 'large' ? ' btn-lg' : item.size === 'small' ? ' btn-sm' : ''
      }`"
    >
      {{ item.text }}
    </button>
    <button
      v-for="item in content.outlinedButtons"
      :key="item.id"
      class="btn me-1 mb-1"
      :class="`btn-outline-${item.type}${
        item.size === 'large' ? ' btn-lg' : item.size === 'small' ? ' btn-sm' : ''
      }`"
    >
      {{ item.text }}
    </button>
    <div class="d-grid">
      <button class="btn" :class="`btn-${content.blockButton.type}`">
        {{ content.blockButton.text }}
      </button>
    </div>
  </base-card>
</template>
<script setup>
import { useButtonsStore } from '@/store/views/components/buttons/buttons'
import { computed } from 'vue'
const buttonsStore = useButtonsStore()
const content = computed(() => buttonsStore.getSizedButtons)
</script>
<style lang="css" scoped></style>
