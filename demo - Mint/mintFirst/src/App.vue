<template>
  <div id="app">
        <mt-header fixed title="多个按钮">
          <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
            <mt-button @click="handleClose">关闭</mt-button>
          </router-link>
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
      handleClose:function(){
        console.log('关闭页面')
      }
  }
}
</script>

<style>
html{
  font-size:20px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
