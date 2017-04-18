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

.redian,.shehui,.tuijian,.shipin,.caijing,.junshi,.keji,.qiche,.yule{
    background-color:#fff;
}
.news_content{
    padding:15px 30px;
    cursor:pointer;
}
.news_title{
    font-size:16px;
}
.news_img{
    width:100%;
}
.news_img img{
    padding:0;
    margin:10px 0;
    width:32%;
}
.news_img img:nth-child(2) {
    margin:10px 15px;
}
.news_bottom{
    font-size:12px;
    color:#999;
    padding-bottom:30px;
    border-bottom:1px solid hsla(0,0%,87%,.6);
    
}
</style>
