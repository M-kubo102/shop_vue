<template>
  <div id="app">
    <a name="top"></a>
    <shopHeader></shopHeader>
    <router-view/>
    <shopFooter></shopFooter>
  </div>
</template>

<script>
import shopHeader from './components/shopHeader'
import shopFooter from './components/shopFooter'

export default {
  name: 'App',
  components:{
      shopHeader,
      shopFooter
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
