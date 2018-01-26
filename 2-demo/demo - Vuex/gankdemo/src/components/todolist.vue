<template>
    <div class="todolist_box">
        <div class="to_left">
            <div v-for="(list,index) in todo" :key="index">
                <p style="text-align:left;"><span v-text="list.num"></span>楼</p>
                <p style="text-align:left;"v-text="list.name"></p>
                <p style="text-align:center;" v-text="list.desc"></p>
                <p style="text-align:right;" v-text="list.date"></p>
                <button @click="deltodo(index)">删除</button>
            </div>
        </div>
        <div class="to_right"> 
            姓名：<input style="margin:5px 0;" v-model="list_name"/><br/>
            内容：<input style="margin:5px 0;" v-model="list_desc"/><br/>
            <button @click="add">添加</button>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import * as types from '../store/types'
export default {
    data(){
        return{
            list_name:'',
            list_desc:'',
            list_count:0,
        }
    },
    computed:mapState({
        todo:'todo'
    }),
    methods:{
        add(){
            this.list_count ++ ;
            let newDate = (new Date()).toLocaleString()
            this.$store.commit(types.ADDTODO,{name:this.list_name,desc:this.list_desc,date:newDate,num: this.list_count})
        },
        deltodo(num){
            this.$store.commit(types.DELTODO,num)
        }
    }
}
</script>

<style>
.todolist_box{
    width:700px;
    margin:0 auto;
}
.to_left{
    width:340px;
    float:left;
    /* border-right:1px solid blue; */
    height:200px;
}
.to_right{
    width:340px;
    float:right;
    display:inline-block;
    height:200px;
}
.to_left>div{
    border:1px solid #ddd;
    padding: 5px;
}
.to_left>div p{
    margin:2px 0;
}
</style>