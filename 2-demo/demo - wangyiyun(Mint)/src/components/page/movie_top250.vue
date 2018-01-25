<template>
<div>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50"> 
      <mt-cell class="movie_cell" v-for="list in list_data" :href="list.alt" :key="list.id">
          <span class="movie_cell_title">{{list.title}}</span>
          <span class="movie_cell_author">
          <!-- 嵌套v-for循环 -->
            <span v-for="lists in list.genres">{{lists}} </span>
          ({{list.year}})(平均{{list.rating.average}}分)
          </span>
          <img slot="icon" :src="list.images.small" width="50" height="50">
      </mt-cell>
      <load-list :isload="isload"></load-list>
  </div>
</div>
</template>

<script>
import loadList from '../common/loadmore'
export default {
    data(){
        return{
            list_data:[],
            start:0, //开始的地方
            count:10, //结束的地方
            loading:false,
            isload:false
        }
    },
    methods:{
        loadMoreTop(){
            var that = this;
            this.$ajax({
                methods:"GET",
                url:'https://bird.ioliu.cn/v1/?url=https://api.douban.com/v2/movie/top250?count='+this.count+'&start='+this.start
            })
            .then((res)=>{
                var loadData = that.list_data;
                for(var i=that.start;i<that.count;i++){
                    loadData.push(res.data.subjects[i]);
                }
                that.start += 10;
                that.count += 10;
                that.loading = false;
            })
            .catch((error) => {
                console.log(error);
            });
        },
        loadMore() {
            this.loading = true;
            this.isload = true;
            setTimeout(()=>{
                this.loadMoreTop();
            },1500)
        }
    },
    components:{
        loadList
    }
}
</script>

<style>
.mint-cell.movie_cell{
    height:80px;
    line-height:80px;
}
.mint-cell.movie_cell .mint-cell-wrapper{
    display: inline-flex;
} 
.mint-cell.movie_cell .mint-cell-wrapper .mint-cell-value{
    flex: 3;
    flex-direction: column;
    align-items: flex-start;
    padding: 18px 0;
}
.movie_cell_title{
    color:#000;
    margin-bottom:10px;
    font-size:16px;
}
.movie_cell_author{
    font-size:14px;
}
.mint-cell-title img{
    border-radius:25px;
}
</style>