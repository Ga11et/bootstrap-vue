<template>
  <li class="notification d-flex align-items-center">
    <i v-if="content.type === 'warning'" class="bi bi-exclamation-circle text-warning"></i>
    <i v-if="content.type === 'error'" class="bi bi-x-circle text-danger"></i>
    <i v-if="content.type === 'success'" class="bi bi-check-circle text-success"></i>
    <i v-if="content.type === 'info'" class="bi bi-info-circle text-primary"></i>
    <div class="text">
      <h4>{{ content.heading }}</h4>
      <p>{{ content.description }}</p>
      <p>30 min. ago</p>
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
.dropdown-menu .notification {
  padding: 0.5em 1em;
  gap: 1em;
}
.dropdown-menu .notification .bi {
  font-size: 1.8em;
}
.dropdown-menu .notification .text h4 {
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
}
.dropdown-menu .notification .text p {
  font-size: 13px;
  line-height: 20px;
  margin-bottom: 3px;
  color: #919191;
}
</style>
