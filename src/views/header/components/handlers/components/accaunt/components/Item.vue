<template>
  <li>
    <a :href="content.link" class="dropdown-item d-flex align-items-center px-4">
      <i v-if="content.type === 'profile'" class="bi bi-person"></i>
      <i v-if="content.type === 'settings'" class="bi bi-gear"></i>
      <i v-if="content.type === 'help'" class="bi bi-question-circle"></i>
      <i v-if="content.type === 'out'" class="bi bi-box-arrow-right"></i>
      <p class="m-0 ps-2">{{ content.text }}</p>
    </a>
  </li>
  <hr class="dropdown-divider" />
</template>
<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
})
</script>
<style lang="css" scoped>
.dropdown-divider:last-child {
  display: none;
}
</style>
