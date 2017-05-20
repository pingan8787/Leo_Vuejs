<template>
<div class="img_div">
    <top-nav :title="img_type"></top-nav>
    <div class="big_imgpage">
        <img :src="img_url" alt="">
    </div>
</div>
</template>
<script>
import topNav from '../common/top-nav'
export default {
    data(){
        return{
            img_url:'',
            img_type:''
        }
    },
    created(){
        this.img_url = this.$route.params.url
        this.img_type = this.$route.params.type
        console.log(this.img_url + ';' + this.img_type);
    },
    components:{
        topNav
    }
}
</script>
<style scoped>
.img_div{
    width: 100%;
    height: 100%;
}
.big_imgpage {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}
.big_imgpage img{
   width: 100%;
}
</style>