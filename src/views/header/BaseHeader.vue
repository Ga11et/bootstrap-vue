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
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 997;
  box-shadow: 0px 2px 20px #0129701a;
}
</style>
