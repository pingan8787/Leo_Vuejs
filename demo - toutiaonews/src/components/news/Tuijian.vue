<template>
    <div class="tuijian">
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" top-pull-text="你好，请下拉" topDropText="快放手，就刷新">
            <div class="news_content" v-for="list in newslist" @click="run_article(list.article_url)">
                <div class="news_title">{{list.title}}</div>
                <div class="shipin_img" v-if="list.large_image_url" :style="'background:url('+list.large_image_url+')no-repeat;background-size: contain;'">
                </div>
                <div class="news_img" v-if="list.image_list">
                        <img :src="img_list.url"  v-for="img_list in list.image_list">
                </div>
                <div class="news_bottom">
                    <span>热</span>
                    <span>{{list.media_name}}</span> 
                    <span>评论</span><span>{{list.repin_count}}</span>
                    <span>18</span><span>分钟</span><span>前</span> 
                </div>
            </div>
        </mt-loadmore>
    </div>
</template>
<style>
</style>

<script>
// import { Loadmore } from 'mint-ui';
// Vue.component(Loadmore.name, Loadmore);
export default {
    data () {
        return {
            newslist:'',
            image_list:'',
            allLoaded:false
        }
    },
    created() {
        let that = this;
        this.$ajax({
            methods:"GET",
            url:'./static/json/tuijian.json',
        })
        .then(function(response) {
            console.log(response);
            that.newslist = response.data.data
        })
        .catch(function(error) {
            console.log(error);
        });
    },
    methods:{
        run_article:function(url){
            window.location.href=url;
        },
        loadTop() {
            console.log('加载更多数据')
            this.$refs.loadmore.onTopLoaded();
        },
        loadBottom() {
            console.log('加载更多数据')
            this.allLoaded = true;// 若数据已全部获取完毕
            this.$refs.loadmore.onBottomLoaded();
        }
    }
}
</script>