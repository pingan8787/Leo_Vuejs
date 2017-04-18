<template>
    <div class="addhobby">
        <div class="page_title">
            <span class="go_back" @click="goback"></span><span>频道管理</span>
        </div>
        <div class="add_mian">
            <div class="del_list">
                <div>点击删除以下频道</div>
                <ul>
                    <li v-for="(list,index) in del_list" @click="del(index)"><a href="javascript:;">{{list}}</a></li>
                </ul>
            </div>
            <div class="add_list">
                <div>点击添加以下频道</div>
                <ul>
                    <li v-for="(list,index) in add_list" @click="add(index)"><a href="javascript:;">{{list}}</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
.add_mian{
    color:#000;
    text-align:left;
    font-size:36px;
    padding-top: 100px;
}
.add_list div,
.del_list div{
    width:100%;
    padding:20px;
}
.add_mian ul{
    margin:0;
    padding:0;
}
.add_mian ul li{
    display: inline-block;
    width: 25%;
    margin-bottom: 20px;
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
.add_mian ul li a{
    color:#000;
    font-size: 36px;
    display: block;
    margin: 0 10px;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 2em;
}
</style>

<script>

export default {
    data () {
        return {
            del_list:['推荐','热点','娱乐','科技','体育','财经','国际','游戏','美文'],
            add_list:['社会','汽车','军事','时尚','旅游','历史','探索','美食','育儿','养生','故事']
        }
    },
    methods:{
        goback () {
        this.$router.goBack()
        },
        del(index){
            this.add_list.push(this.del_list[index])
            this.del_list.splice(index,1)
        },
        add(index){
            this.del_list.push(this.add_list[index])
            this.add_list.splice(index,1)
        }
    }
}
</script>