<template>
  <ul v-if="content.components" :id="id" data-bs-parent="#sidebar-nav" class="ul ps-4 collapse">
    <li v-for="item in content.components" :key="item.id" class="d-flex align-items-center">
      <router-link
        class="link sublink d-flex p-2 w-100"
        :class="{ active: activeLink === item.id }"
        :to="item.link"
        @click="setActiveLink(item.id)"
      >
        <i v-if="activeLink === item.id" class="bi bi-circle-fill me-2"></i>
        <i v-else class="bi bi-circle me-2"></i>
        {{ item.text }}
      </router-link>
    </li>
  </ul>
</template>
<script setup>
import { useSidebarStore } from '@/store/sidebar'
import { computed } from 'vue'
const sidebarStore = useSidebarStore()
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
})
const id = computed(() => props.content.text + '-nav')
const activeLink = computed(() => sidebarStore.getActiveLink)
const setActiveLink = sidebarStore.setActiveLink
</script>
<style lang="css" scoped>
.ul {
  list-style-type: none;
}
.ul .link {
  font-size: 15px;
  line-height: 15px;
  color: #012970;
  font-weight: 600;
  text-decoration: none;
  border-radius: 4px;
}
.ul .sublink {
  font-size: 14px;
  line-height: 14px;
}
.ul .sublink.active {
  color: #4154f1;
}
.ul .sublink i {
  font-size: 6px;
}
</style>
