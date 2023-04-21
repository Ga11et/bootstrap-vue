<template>
  <header class="header d-flex align-items-center">
    <Logo />
    <Search />
    <Handlers />
  </header>
</template>
<script setup>
import Handlers from './components/handlers/Handlers.vue'
import Logo from './components/Logo.vue'
import Search from './components/Search.vue'
</script>
<style lang="css" scoped>
.header {
  height: 60px;
  box-shadow: 0px 2px 20px #0129701a;
}
</style>
