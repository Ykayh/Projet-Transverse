<template>
  <div class="body">
    <header-tpl></header-tpl>
  </div>
</template>

<script>
const HeaderTemplate = window.httpVueLoader('./components/Header.vue')

module.exports = {
  components: {
    'header-tpl': HeaderTemplate
  }
}
</script>

<style>
  .body {
    background-image: url("./ressources/Fond.png");
  }
</style>
