<template>
    <div>
        <header-tpl class="header"></header-tpl>
        <h1>Visualisation</h1>
    </div>
</template>

<script>
const HeaderTemplate = window.httpVueLoader('./components/Header.vue')

module.exports = {
  components: {
    'header-tpl': HeaderTemplate
  },
  data: {
    parameters: {
        id = none,
        
    }
  },
  async mounted () {
    parameters = this.$route.query
    console.log(parameters)
  }
}
</script>