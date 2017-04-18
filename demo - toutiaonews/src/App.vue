<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
html,body{
  margin:0;
  padding:0;
  background-color:#f8f8f8;
}
.main-page{
  padding-top:175px;
  font-size:50px;
}
a{
  text-decoration:none;
}
.go_back{
    width:50px;
    height:50px;
    display:block;
    position:absolute;
    background: url(http://s2.pstatp.com/image/toutiao_mobile/header_back.png) no-repeat 50%;
    background-size: 100%;
    margin:25px;
}
.page_title {
  position: fixed;
  width: 100%;
  height:100px;
  line-height:100px;
  background-color: #d43d3d;
  color:#fff;
  text-align:center;
  font-size: 46px;
}

</style>
