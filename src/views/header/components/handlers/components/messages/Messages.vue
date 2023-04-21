<template>
  <li>
    <Handler />
    <ul class="dropdown-menu dropdown-menu-end">
      <MessagesHeader />
      <Message v-for="item in messages" :key="item.id" :content="item" />
      <MessagesFooter />
    </ul>
  </li>
</template>
<script setup>
import { computed } from 'vue'
import Handler from './components/Handler.vue'
import Message from './components/Message.vue'
import MessagesFooter from './components/MessagesFooter.vue'
import MessagesHeader from './components/MessagesHeader.vue'
import { useHeaderStore } from '@/store/header'
const store = useHeaderStore()
const messages = computed(() => store.getMessages)
</script>
<style lang="css" scoped></style>
