<template>
  <base-card :content="content.heading">
    <nav class="d-flex justify-content-center">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" v-for="item in content.crumbs" :key="item.id">
          <a href="#">{{ item.text }}</a>
        </li>
      </ol>
    </nav>
  </base-card>
</template>
<script setup>
import { useBreadcrumbsStore } from '@/store/views/components/breadcrumbs/breadcrumbs'
import { computed } from 'vue'
const breadcrumbsStore = useBreadcrumbsStore()
const content = computed(() => breadcrumbsStore.getCenteredCrumbs)
</script>
<style lang="css" scoped>
.breadcrumb .breadcrumb-item {
  color: #899bbd;
  font-weight: 600;
}
.breadcrumb .breadcrumb-item:last-child {
  color: #51678f;
}
.breadcrumb .breadcrumb-item a {
  color: inherit;
  text-decoration: none;
}
.breadcrumb .breadcrumb-item a:hover {
  color: #51678f;
}
</style>
