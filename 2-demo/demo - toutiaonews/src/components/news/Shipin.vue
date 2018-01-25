<template>
    <div class="shipin">
        <div class="shipin_content" v-for="list in shipinlist" @click="run_article(list.article_url)">
            <div class="shipin_title">{{list.title}}</div>
            <div class="shipin_img" v-if="list.large_image_url" :style="'background:url('+list.large_image_url+')no-repeat;background-size: contain;'">
            </div>
            <div class="news_img" v-if="list.image_list">
                    <img :src="img_list.url"  v-for="img_list in list.image_list">
            </div>
            <div class="shipin_bottom">
                <span>热</span>
                <span>{{list.media_name}}</span> 
                <span>评论</span><span>{{list.repin_count}}</span>
                <span>18</span><span>分钟</span><span>前</span> 
            </div>
        </div>
    </div>
</template>

<style>
.shipin_content{
    padding:15px 30px;
    cursor:pointer;
}
.shipin_title{
    font-size:16px;
}
.shipin_img{
    width:100%;
    height:515px;
    margin: 15px 0;
}
.shipin_bottom{
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
            shipinlist:''
        }
    },
    created() {
        let that = this;
        this.$ajax({
            methods:"GET",
            url:'./static/json/shipin.json',
        })
        .then(function(response) {
            that.shipinlist = response.data.data
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