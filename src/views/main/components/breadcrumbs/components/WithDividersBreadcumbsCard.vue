<template>
  <base-card :content="content.heading">
    <nav
      v-for="crumb in content.crumbs"
      :key="crumb.id"
      :style="`--bs-breadcrumb-divider: '${crumb.divider}''`"
    >
      <ol class="breadcrumb">
        <li class="breadcrumb-item" v-for="item in crumb.parts" :key="item.id">
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
const content = computed(() => breadcrumbsStore.getWithDividersCrumbs)
</script>
<style lang="css" scoped>
.breadcrumb-title {
  font-size: 24px;
  margin-bottom: 0;
  font-weight: 600;
  color: #012970;
}
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
