<template>
  <div id="app">
    <!-- <creatived/> -->
    <HelloWorld/>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import creatived from './views/Creatived.vue'

export default {
  name: 'Creatived',
  components: {
    // creatived,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
