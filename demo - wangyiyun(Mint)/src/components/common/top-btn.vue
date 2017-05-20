<template>
<div>
    <a class="top-fixed"  @click="backtop">
        <img src="../../assets/icon/top.png">
    </a>
</div>
</template>
<script>

export default {
    data(){
        return{
            top_url:'#'
        }
    },
    methods:{
        backtop(){
            window.scrollTo(0,0)
        }
    },
    created(){
    }
}
</script>
<style>
.top-fixed{
    width:40px;
    height:40px;
    position: fixed;
    bottom: 70px;
    background-color: #26a2ff;
    border-radius: 20px;
    z-index: 10;
}
.top-fixed{
    left: 10px;
}
.top-fixed img{
    width: 20px;
    height: 20px;
    margin: 10px;
}
</style>