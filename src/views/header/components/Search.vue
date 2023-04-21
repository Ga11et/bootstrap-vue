<template>
  <form class="form d-flex align-items-center justify-content-start">
    <input class="input" type="search" placeholder="Search" />
    <button class="button">
      <i class="bi bi-search"></i>
    </button>
  </form>
</template>
<script setup></script>
<style lang="css" scoped>
.form {
  border: 1px solid rgba(1, 41, 112, 0.2);
  border-radius: 3px;
  padding: 7px 38px 7px 8px;
  min-width: 360px;
  margin: 0 20px;
}
.form .input {
  border: none;
  outline: none;
  width: 100%;
}
.form .button {
  margin-right: -30px;
  border: none;
  background-color: transparent;
}
</style>
