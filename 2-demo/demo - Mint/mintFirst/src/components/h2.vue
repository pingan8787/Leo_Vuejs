<template>
  <div class="h2">
    <h2>这是loadmore页面</h2>
    <mt-loadmore :top-method="loadTop" 
      top-distance="100" 
      :bottom-method="loadBottom" 
      :bottom-all-loaded="allLoaded" 
      top-pullText = "这个是下拉刷新"
      top-dropText = "这个是释放更新"
      top-loadingText = "这个是加载中..."
      ref="loadmore">
        <ul>
            <li v-for="item in list">{{ item }}</li>
        </ul>
    </mt-loadmore>

  </div>
</template>

<script>
export default {
  name: 'h2',
  data () {
    return {
      list:[1,2,3,4,5,6,7,8,9]
    }
  },
  methods: {
    loadTop(){
      console.log('loadTop');
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom(){
      console.log('loadBottom');
      this.allLoaded = true;// 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded();
    },
    allLoaded(){
      console.log('allLoaded')
    }
  }
}
</script>

<style scoped>
ul{
  border:1px solid #9400D3;
  font-size:26px;
}
ul li {
  list-style:none;
  border:1px solid #7CFC00;
}
</style>
