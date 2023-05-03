<template>
  <base-card :content="content.heading">
    <div class="d-flex gap-1">
      <div class="btn-group">
        <button
          v-for="item in content.first"
          :key="item.id"
          class="btn"
          :class="`btn-${item.type}`"
          :disabled="item.disabled"
        >
          {{ item.text }}
        </button>
      </div>
      <div class="btn-group">
        <button
          v-for="item in content.second"
          :key="item.id"
          class="btn"
          :class="`btn-${item.type}`"
          :disabled="item.disabled"
        >
          {{ item.text }}
        </button>
      </div>
      <div class="btn-group">
        <button
          v-for="item in content.third"
          :key="item.id"
          class="btn"
          :class="`btn-outline-${item.type}`"
          :disabled="item.disabled"
        >
          {{ item.text }}
        </button>
      </div>
    </div>
  </base-card>
</template>
<script setup>
import { useButtonsStore } from '@/store/views/components/buttons/buttons'
import { computed } from 'vue'
const buttonsStore = useButtonsStore()
const content = computed(() => buttonsStore.getGroupedButtons)
</script>
<style lang="css" scoped></style>
