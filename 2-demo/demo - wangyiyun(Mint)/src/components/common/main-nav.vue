<template>
<div id="mainNav">
    <mt-header :title="selected" :fixed='isfixed'> 
        <router-link to="/movie" slot="left"> 
            <mt-button icon="back"></mt-button> 
        </router-link> 
        <mt-button icon="more" slot="right" @click.native="openActionsheet">
        </mt-button>
    </mt-header>
    <mt-tabbar v-model="selected" :fixed='isfixed'>
        <mt-tab-item id="电影" @click.native="go(selected)"> 
            <img slot="icon" src="../../assets/icon/movie.png"> 
            电影
        </mt-tab-item> 
        <mt-tab-item id="音乐" @click.native="go(selected)"> 
            <img slot="icon" src="../../assets/icon/music.png"> 
            音乐 
        </mt-tab-item> 
        <mt-tab-item id="书籍" @click.native="go(selected)"> 
            <img slot="icon" src="../../assets/icon/book.png"> 
            书籍
        </mt-tab-item> 
        <mt-tab-item id="图片" @click.native="go(selected)"> 
            <img slot="icon" src="../../assets/icon/images.png"> 
            图片
        </mt-tab-item> 
    </mt-tabbar>
    <div class="user-fixed" @click="goPersonal">
        <img src="../../assets/icon/user.png">
    </div>
    <mt-actionsheet :actions="myactions" v-model="mysheetVisible" cancelText="取消">
    </mt-actionsheet>
    <top-btn></top-btn>
</div>
</template>

<script>
import { Toast } from 'mint-ui';
import topBtn from '../../components/common/top-btn'
import Login from '../../components/common/login'
export default {
    name:'mainNav',
    data(){
        return{
            isfixed:true,
            selected:'电影',
            myactions:[
                {name:'分享',method :this.actionsShare},
                {name:'后退',method :this.actionsOut}
            ],
            mysheetVisible:false
        }
    },
    created(){
        let now_hash = window.location.hash.slice(2);
        //防止页面刷新后，导航未跟着刷新，出现 图片 页中，导航还在默认电影；
        switch(now_hash){
            case "movice":
                this.selected = "电影";
                break;
            case "music":
                this.selected = "音乐";
                break;
            case "book":
                this.selected = "书籍";
                break;
            case "image":
                this.selected = "图片";
                break;
        }
    },
    methods:{
        go(index){
            switch(index){
            case "电影":
                this.$router.push({name:'Movie'});
                break;
            case "音乐":
                this.$router.push({name:'Music'});
                break;
            case "书籍":
                this.$router.push({name:'Book'});
                break;
            case "图片":
                this.$router.push({name:'Image'});
                break;
            }
        },
        goPersonal(){
            console.log(Login.data().isLogin )
            // if(Login.data().isLogin){
            //     this.$router.push({name:'Personal'})
            // }else{
            //     Toast({
            //         message: '请先登录',
            //         iconClass: 'icon icon-success',
            //         duration:1500
            //     });
            // }
            this.$router.push({name:'Personal'})
        },
        actionsShare(){
            console.log('这是分享')
        },
        actionsOut(){
            console.log('这是后退')
        },
        openActionsheet(){
            this.mysheetVisible = true
        }
    },
    components:{
        topBtn
    }

}
</script>

<style>
.user-fixed{
    width:40px;
    height:40px;
    position: fixed;
    bottom: 70px;
    background-color: #26a2ff;
    border-radius: 20px;
    z-index: 10;
    right: 10px;
}
.user-fixed img{
    width: 20px;
    height: 20px;
    margin: 10px;
}
</style>