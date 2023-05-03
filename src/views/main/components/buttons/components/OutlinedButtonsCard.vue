<template>
  <base-card :content="content.heading">
    <button
      v-for="item in content.buttons"
      :key="item.id"
      class="btn me-1 mb-1"
      :class="`btn-outline-${item.type}`"
    >
      {{ item.text }}
    </button>
  </base-card>
</template>
<script setup>
import { useButtonsStore } from '@/store/views/components/buttons/buttons'
import { computed } from 'vue'
const buttonsStore = useButtonsStore()
const content = computed(() => buttonsStore.getOutlinedButtons)
</script>
<style lang="css" scoped></style>
