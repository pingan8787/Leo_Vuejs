<template>
  <div id="app">
    <h2>你好 ， {{user}}</h2>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'App',
  data(){
    return {

    }
  },
  computed:mapState({
    user:'user'
  })
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
