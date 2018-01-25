<template>
    <div class="redian">
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
    </div>
</template>
<style>

</style>

<script>

export default {
    data () {
        return {
            newslist:'',
            image_list:''
        }
    },
    created() {
        let that = this;
        this.$ajax({
            methods:"GET",
            url:'./static/json/redian.json',
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
        }
    }
}
</script>