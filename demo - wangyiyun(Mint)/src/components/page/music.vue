<template>
<div class="main-div">
    <ul>
        <li v-for="list in albums"><img :src="list.bg" @click="gomusiclist(list.name,list.id)"></li>
    </ul>
</div>
</template>

<script>

export default {
    data(){
        return {
            albums:[
                {
                    name: "飙升榜",
                    id:19723756,
                    bg: require("../../assets/music/soar_music.jpg")
                },
                {
                    name: "新歌榜",
                    id:3779629,
                    bg:require("../../assets/music/new_music.jpg")
                },
                {
                    name: "原创榜",
                    id:2884035,
                    bg:require("../../assets/music/original_music.jpg")
                },
                {
                    name: "KTV麦榜",
                    id:21845217,
                    bg:require("../../assets/music/ktv_music.jpg")
                },
                {
                    name: "华语金曲榜",
                    id:4395559,
                    bg:require("../../assets/music/chinese_music.jpg")
                },
                {
                    name: "我的专辑",
                    id:98833242,
                    bg:require("../../assets/music/my_music.jpg")
                },
            ]

        }
    },
    created(){
        // this.$ajax({
        //     methods:"GET",
        //     url:'https://bird.ioliu.cn/netease?id=222222'
        // })
        // .then((res)=>{
        //     console.log(res);
        // })
        // .catch((error) => {
        //     console.log(error);
        // });
    },
    methods:{
        gomusiclist(name,id){
            this.$router.push({name:'MusicList', params: { id: id ,name:name }})
            console.log(name + ',' +id)
        }
    }
}
</script>

<style>
ul{
    margin: 0; 
    padding: 0;
}
li{
    width: 50%;
    list-style: none;
    display: inline-block;
}
li img{
    width:100%;
    vertical-align:middle
}
</style>