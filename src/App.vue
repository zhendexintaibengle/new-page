<template>
  <div id="app">
    <IndexPage msg='1' />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import IndexPage from './pages/index/IndexPage.vue';

export default {
  name: 'App',
  components: {
    IndexPage
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
