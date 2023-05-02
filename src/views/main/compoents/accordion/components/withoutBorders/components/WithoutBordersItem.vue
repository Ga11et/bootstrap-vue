<template>
  <div class="accordion-item" id="withoutBordersAccordion">
    <h3 class="accordion-header">
      <button
        class="accordion-button collapsed px-1"
        data-bs-toggle="collapse"
        :data-bs-target="`#withoutBorders${content.id}`"
      >
        {{ content.heading }}
      </button>
    </h3>
    <div
      class="accordion-collapse collapse"
      :id="`withoutBorders${content.id}`"
      data-bs-parent="#withoutBordersAccordion"
    >
      <div class="accordion-body px-1">{{ content.description }}</div>
    </div>
  </div>
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
.accordion-item .accordion-header .accordion-button:not(.collapsed) {
  color: #4154f1;
  background-color: transparent;
}
</style>
