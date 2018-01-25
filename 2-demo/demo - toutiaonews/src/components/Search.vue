<template>
    <div class="hot_search">
        <div class="page_title">
            <span class="go_back" @click="goback"></span><span>热门搜索</span>
        </div>
        <div class="hot_mian">
            <div class="search_div">
                <a href="#" class="action_toutiao"></a>
                <input type="text" class="search_input" placeholder="请输入搜索关键词">
            </div>
            <div class="search_a">
                <ul>
                    <li><a href="#">学生宿舍6楼跳下</a></li>
                    <li><a href="#">关晓彤曝代言微商</a></li>
                    <li><a href="#">瓦努阿图发生地震</a></li>
                    <li><a href="#">涉黑人员冲击政府</a></li>
                    <li><a href="#">陈坤素颜现身机场</a></li>
                    <li><a href="#">拒午睡遭老师施暴</a></li>
                    <li><a href="#">彭于晏方发声明</a></li>
                    <li><a href="#">捉毒蛇让女儿把玩</a></li>
                    <li><a href="#">最贵车牌被疯抢</a></li>
                    <li><a href="#">违停被查撞击交警</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
.hot_mian{
    padding-top:100px;
}
.hot_mian .search_div{
    height: 100px;
    line-height: 100px;
    background-color: #ddd;
    font-size:36px;
    padding: 0 15px;
}
.hot_mian .search_div a{
    display: block;
    width: 60px;
    height: 60px;
    position: absolute;
    background: url(http://s3.pstatp.com/image/toutiao_mobile/search_icons.png?ver=201408311655) #fff no-repeat 5px 2px;
    background-size: 50px;
    left: 25px;
    top: 120px;
}
.hot_mian .search_div .action_toutiao{
    background-position: 5px -95px;
}

.hot_mian .search_input{
    height:70px;
    border: 0;
    border-radius: 10px;
    margin: 0;
    width: 100%;
    font-size: 36px;
    -webkit-appearance: none;
    padding: 5px 10px 5px 90px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    color: #666;
    background: #fff;
}



.add_list span,
.del_list span{
    width:100%;
    padding:20px;
}
.search_a{
    padding-top: 30px;
    text-align: center;
}
.hot_mian ul{
    margin:0;
    padding:0;
}
.hot_mian ul li{
    display: inline-block;
    margin-bottom: 10px;
    -webkit-animation: zoomIn .3s ease;
    animation: zoomIn .3s ease;
}
@keyframes zoomIn{
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.3,.3,.3);
        transform: scale3d(.3,.3,.3);
    }
    50% {
            opacity: 1;
    }
}
.hot_mian ul li a{
    background: #eeeeee;
    color: #363636;
    font-size: 34px;
    display: block;
    margin: 10px;
    text-align: center;
    line-height: 2em;
    padding: 0px 14px;
}
</style>

<script>

export default {
    data () {
        return {
            hot_key:['卓伟曝鹿晗隐婚','富翁回乡当村官','133万现金变白纸','农民挖到百枚炮弹','82岁奶奶蹦迪','彭于晏方发声明','男子出租自己','最贵车牌被疯抢','第七届北影节开幕','闯红灯自称色盲']
        }
    },
    methods:{
        goback () {
        this.$router.goBack()
        }
    }
}
</script>