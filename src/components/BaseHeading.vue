<template>
  <div class="baseHeading">
    <h1 class="heading">{{ content.heading }}</h1>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" v-for="item in content.crumbs" :key="item.id">
          {{ item.text }}
        </li>
      </ol>
    </nav>
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
.baseHeading .heading {
  font-size: 24px;
  margin-bottom: 0;
  font-weight: 600;
  color: #012970;
}
.baseHeading .breadcrumb {
  font-size: 14px;
  color: #899bbd;
  font-weight: 600;
}
.baseHeading .breadcrumb .breadcrumb-item:last-child {
  color: #51678f;
}
</style>
