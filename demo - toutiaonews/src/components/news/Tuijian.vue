<template>
    <div class="tuijian">
        <div class="news_content" v-for="list in newslist" @click="run_article(list.article_url)">
            <div class="news_title">{{list.title}}</div>
            <div class="news_img">
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
.tuijian{
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
        }
    }
}
</script>