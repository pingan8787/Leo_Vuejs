<template>
<div class="main-div">
    <div class="personal_div">
        <top-nav :title="titles"></top-nav>
        <div class="personal_header">
            <img src="../../assets/user-img.jpg" alt="">
            <span>平安满世界跑</span>
        </div>
        <div class="personal_cell">
            <mt-cell title="照片墙" to="//github.com" is-link>
                <img slot="icon" src="../../assets/icon/pic.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="备忘录" to="//github.com" is-link>
                <img slot="icon" src="../../assets/icon/pin.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="收藏" to="//github.com" is-link>
                <img slot="icon" src="../../assets/icon/similar-product.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="消息" to="//github.com" is-link>
                <img slot="icon" src="../../assets/icon/remind.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="设置" to="//github.com" is-link>
                <img slot="icon" src="../../assets/icon/set.png" width="24" height="24">
            </mt-cell>
        </div>
    </div>
</div>
</template>
<script>
import topNav from './top-nav'
export default {
    data(){
        return{
            titles:'个人中心'
        }
    },
    components:{  //前面导入完  需要在这里引用注册
        topNav
    },
    methods:{
    }
}
</script>
<style scoped>
.personal_div{
    display:flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
}
.personal_header{
    width:100%;
    height:210px;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    background-color:#26a2ff;
    color:#fff;
}
.personal_header img{
    width:70px;
    height:70px;
    border-radius:100%;
    border:2px solid #fff;
    margin-bottom:5px;
}
.personal_cell{
    width:100%;
}
.mint-cell{
    text-align:left;
    height: 50px;
}
.mint-cell-title img{
    border-radius:0;
    margin: 0 10px;
}
</style>
