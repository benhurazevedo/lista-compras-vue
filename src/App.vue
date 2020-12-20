<template>
  <div id="app">
    <titulo></titulo>
    <router-view></router-view>
  </div>
</template>

<script>
import titulo from './components/titulo.vue'

export default {
  name: 'App',
  components: {
    titulo
  }
}
</script>

<style>
#app ,
    TelaInclusaoItem{
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 45%;
}
</style>
