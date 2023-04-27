<template>
  <a
    v-if="content.components"
    data-bs-toggle="collapse"
    :data-bs-target="'#' + id"
    class="nav-link link d-flex align-items-center px-3 py-3"
    :class="{ active: activeLink[0] === content.id }"
    :href="content.link"
    @click="setActiveLink"
  >
    <i :class="content.image"></i>
    <p class="m-0 ps-3">{{ content.text }}</p>
    <i class="bi bi-chevron-down ms-auto arrow"></i>
  </a>
  <router-link
    v-else
    class="nav-link link d-flex align-items-center px-3 py-3"
    :class="{ active: activeLink[0] === content.id }"
    :to="content.link"
    @click="setActiveLink"
  >
    <i :class="content.image"></i>
    <p class="m-0 ps-3">{{ content.text }}</p>
  </router-link>
</template>
<script setup>
import { useSidebarStore } from '@/store/sidebar'
import { computed } from 'vue'
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
})
const sidebarStore = useSidebarStore()
const id = computed(() => props.content.text + '-nav')
const activeLink = computed(() => sidebarStore.getActiveLink)
const setActiveLink = () => {
  sidebarStore.setActiveLink(props.content.id)
}
</script>
<style lang="css" scoped>
.link {
  font-size: 15px;
  line-height: 15px;
  color: #012970;
  font-weight: 600;
  text-decoration: none;
  border-radius: 4px;
}
.link.active {
  color: #4154f1;
}
.link.active .arrow {
  transform: rotate(180deg);
}
.link:hover {
  cursor: pointer;
  background-color: #f6f9ff;
  color: #4154f1;
}
.link i {
  color: inherit;
}
</style>
