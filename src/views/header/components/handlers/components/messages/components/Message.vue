<template>
  <li class="message d-flex align-items-start px-4 py-2">
    <img class="image rounded-circle" :src="content.image" :alt="content.name" />
    <div class="content">
      <h4 class="name">{{ content.name }}</h4>
      <p class="text">{{ content.message }}</p>
      <p class="text">{{ content.time }}</p>
    </div>
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
.message {
  gap: 20px;
  max-width: 300px;
}
.message .image {
  width: 40px;
  height: 40px;
}
.message .content .name {
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #444444;
}
.message .content .text {
  line-height: 20px;
  font-size: 13px;
  margin-bottom: 3px;
  color: #919191;
}
</style>
