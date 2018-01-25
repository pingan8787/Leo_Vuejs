<template>
  <div class="hello">


        <mt-button @click.native="Click1">{{msg1}}</mt-button>
        <mt-button @click.native="Click2">{{msg2}}</mt-button>
        <div>
          <router-link to="/h2" style="color:#000">2 - loadmore页面</router-link><br>
          <router-link to="/h3" style="color:#000">3 - infinite页面</router-link><br>
          <router-link to="/h4" style="color:#000">4 - popup页面</router-link><br>
          <router-link to="/h5" style="color:#000">5 - swipe页面</router-link><br>
          <router-link to="/h6" style="color:#000">6 - loadmore页面</router-link><br>
          <router-link to="/h7" style="color:#000">7 - infinite页面</router-link><br>
        </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
export default {
  name: 'hello',
  data () {
    return {
      msg1: 'Toast',
      msg2: 'Indicator'
    }
  },
  methods: {
      Click1: function() {
          Toast({
            message: '提示',
            // position: 'middle',
            // duration: 5000,
            iconClass: 'icon icon-success'
          });
          
      },
      Click2: function() {
          // Indicator.open();
          // Indicator.open('加载中...');
          Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'//加载图标的类型
             	// 'snake'
              // 'fading-circle'
              // 'double-bounce'
              // 'triple-bounce'
          });
          // console.log(Indicator.open.length)
          // Indicator.close(); 关闭
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #fff;
}
</style>
