<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default { 
  name: 'app',
  data() { 
    return { 
    }; 
  }, 
  methods: { 
  } 
};
</script>

<style>
html,body{
  height:100%;
  width:100%;
}
body{
  padding:0;
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  width:100%;
}
.main-fixed{
    position: fixed;
    top: 40px;
    width: 100%;
    z-index: 5;
}
.mint-spinner-fading-circle{
  margin:10px auto;
}
.main-div{
  padding-top: 40px;
  padding-bottom: 55px;
}
.mint-header.is-fixed{
  z-index:10!important;
}
.mint-header-title{
  font-size:20px!important;
}
</style>
