<template>
  <div class="accordion-item">
    <h3 class="accordion-header" :id="`heading${content.id}`">
      <button
        class="accordion-button collapsed"
        data-bs-toggle="collapse"
        :data-bs-target="`#default${content.id}`"
        aria-expanded="false"
        :area-controls="`default${content.id}`"
      >
        {{ content.heading }}
      </button>
    </h3>
    <div
      class="accordion-collapse collapse"
      :id="`default${content.id}`"
      data-bs-parent="#defaultAccordion"
      :aria-labelledby="`heading${content.id}`"
    >
      <div class="accordion-body">
        {{ content.description }}
      </div>
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
  color: #012970;
  background-color: #f6f9ff;
}
</style>
