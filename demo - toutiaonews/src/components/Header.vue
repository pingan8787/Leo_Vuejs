<template>
  <div id="main">
    <div class="top_bar">
      <div class="top_l">
        <a href="javascript:;" class="msg-box"><div class="tips"></div></a>
      </div>
      <div class="top_c">
        <a href="javascript:;" class="top_c_title"></a>
        <a href="javascript:;" class="top_c_img" @click="reviews"></a>
      </div>
      <div class="top_r">
        <router-link to="/Search" class="top_r_btn"></router-link>
      </div>
    </div>
    <div class="top_div">
      <div class="top_menu">
          <div class="top_menu_more">
              <router-link to="/Addhobby" class="more_btn"></router-link>
          </div>
          <div class="top_menu_main" style="width: 150%;">
              <router-link to="/news/tuijian" :class="{'router-link-active':tab_active}">推荐</router-link>
              <router-link to="/news/shipin">视频</router-link>
              <router-link to="/news/redian">热点</router-link>
              <router-link to="/news/shehui">社会</router-link>
              <router-link to="/news/yule">娱乐</router-link>
              <router-link to="/news/qiche">汽车</router-link>
              <router-link to="/news/caijing">财经</router-link>
              <router-link to="/news/keji">科技</router-link>
              <router-link to="/news/junshi">军事</router-link>
          </div>
      </div> 
    </div>
  </div>
</template>

<style>
#main{
  position: fixed;
  width: 100%;
  z-index: 19;
}
.top_bar{
  height:100px;
  background-color: #d43d3d;
}
.top_l{
  width:150px;
  float:left;
  height: 100px;
}
.top_c{
  width:100%;
  text-align:center;
  position: absolute;
}
.top_r{
  position:absolute;
  right:0;
  top:0;
  text-align: right;
}
.top_l .msg-box{
  width:54px;
  height:54px;
  background:url('../../static/img/pageTitleEmail.png')no-repeat 50%;
  background-size: contain;
  display: block;
  margin: 23px 0 23px 36px;
}
.top_r .top_r_btn{
  width:54px;
  height:54px;
  display: block;
  background:url('../../static/img/pageTitleSearch.png')no-repeat 50%;
  background-size: contain;
  margin: 23px 36px 23px 0;
}
.top_c .top_c_title{
  width: 200px;
  height: 50px;
  display: inline-block;
  background:url('../../static/img/pageTitle.png')no-repeat 50%;
  background-size: contain;
  margin: 23px 0;
}
.top_c .top_c_img{
  width: 50px;
  height: 50px;
  display: inline-block;
  background:url('../../static/img/pageTitleRefresh.png')no-repeat 50%;
  background-size: contain;
  margin: 23px 0;
}
.top_div{
  overflow:hidden;
}
.top_menu{
  height:70px;
  line-height:70px;
  background-color:#F4F5F6;
  font-size: 36px;
  padding:0 90px 0 15px;
  overflow:auto;
}
.top_menu a{
  color:#505050;
  padding: 5px 25px;
  text-decoration:none;
}
.more_btn{
  width:60px;
  height:60px;
  display:inline-block;
  background:url('../../static/img/headerBarMore.png')no-repeat 50%;
  position:absolute;
  right:0;
  background-color: #F4F5F6;
}
.router-link-active{
color:  #f85959 !important;
outline:none;
}

</style>

<script>
import router from '../router'

export default {
  data () {
      return {
        tab_active : false
      }
  },
  methods:{
    reviews(){
      document.location.reload()
    }
  },
  created(){
    if(window.location.hash === '#/'){
      this.tab_active=true;
    }
  }
}
</script>
