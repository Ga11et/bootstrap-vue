<template>
  <nav class="handlers w-100">
    <ul class="ul d-flex align-items-center justify-content-end w-100">
      <Notifications />
      <Messages />
      <Accaunt />
    </ul>
  </nav>
</template>
<script setup>
import Accaunt from './components/accaunt/Accaunt.vue'
import Messages from './components/messages/Messages.vue'
import Notifications from './components/notifications/Notifications.vue'
</script>
<style lang="css" scoped>
.handlers .ul {
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 25px;
}
</style>
