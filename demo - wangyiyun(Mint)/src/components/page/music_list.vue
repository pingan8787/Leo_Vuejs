<template>
    <div class="main-div">
        <div class="music_list_div">
            <top-nav :title="name"></top-nav>
            <mt-search v-model="value" cancel-text="取消" placeholder="搜索"> </mt-search>
            <top-btn></top-btn>
            <load-list :isload="isload"></load-list>
            <mt-cell :title="list.name + '/' + parseInt(list.bMusic.playTime/1000/60) + ':' + (parseInt(list.bMusic.playTime/1000)-parseInt(list.bMusic.playTime/1000/60)*60)" v-for="list in music_list" :key="list.id">
                <span><img src="../../assets/icon/play.png" :alt="list.mp3Url"></span>
                <img slot="icon" :src="list.album.blurPicUrl" width="40" height="40" >
            </mt-cell>
        </div>
    </div>
</template>
<script>
import topNav from '../common/top-nav'
import topBtn from '../common/top-btn'
import loadList from '../common/loadmore'
export default {
    data (){
        return {
            name:'',
            value:'',
            id:'',
            music_list:'',
            isload:true
        }
    },
    created(){
        this.name = this.$route.params.name   // 通过this.$route.params.name获取路由里面的name参数
        this.id = this.$route.params.id
        //https://bird.ioliu.cn/v1/?url=http://music.163.com/api/playlist/detail?id=19723756
        this.$ajax({
            methods:'GET',
            url:'https://bird.ioliu.cn/v1/?url=http://music.163.com/api/playlist/detail?id=' + this.id
        })
        .then((res) =>{
            setTimeout(()=>{
                this.music_list = res.data.result.tracks;
                this.isload = false
            },1500)
        })
        .catch((error) =>{
            console.log(error);
        })
    },
    computed:{
    },
    components:{
        topNav,
        topBtn,
        loadList
    }
}
</script>
<style>
.main-div .music_list_div .mint-search{
    height: 100%;
}
.music_list_div .mint-cell-wrapper .mint-cell-value{
    flex:1;
    display:flex;
    justify-content: flex-end;
}
.music_list_div .mint-cell-wrapper .mint-cell-value img{
    width: 20px;
    height: 20px;
}
.music_list_div .mint-cell-wrapper .mint-cell-title{
    flex:5;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 70%;
}
.music_list_div .mint-cell-wrapper .mint-cell-title span{
    margin-left: 20px;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.music_list_div .mint-cell-wrapper .mint-cell-title img{
    margin: 10px;
}
.music_list_div .mint-searchbar{
    background-color:transparent;
    border-bottom: 1px solid #ddd;
}
.music_list_div .mint-searchbar-inner .mintui-search{
    font-size:22px;
}

</style>
