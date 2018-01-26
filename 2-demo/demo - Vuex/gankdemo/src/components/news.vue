<template>
    <div>
        <h2>{{title}}</h2>
        <h3>{{newTitle}}</h3>
        <table class="news_table" border="1" cellspacing="0" cellpadding="0">
            <thead>
                <tr>
                    <th>简介</th>
                    <th>作者</th>
                    <th>日期</th>
                    <th>类型</th>
                    <th>地址</th>
                    <th>被使用</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in list" :key="index">
                    <td v-text="item.desc"></td>
                    <td v-text="item.who"></td>
                    <td v-text="item.createdAt"></td>
                    <td v-text="item.type"></td>
                    <td v-text="item.url"></td>
                    <td> <a :href="item.used">打开链接</a> </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import * as types from '../store/types'
import {mapState} from 'vuex'
import api from '../constant/api.js'
export default {
    name:'news',
    data(){
        return {
            title:'欢迎来到新闻页',
            list :[]
        }
    },
    computed:mapState({
        newTitle: state=>state.title
    }),
    mounted(){
        this.$store.commit(types.TITLE,"正在查阅新闻页！");
        this.get_data();
    },
    methods:{
        get_data(){
            this.axios.get(api.get_news).then(data => {
                console.log(data);
                this.list = data.data.results;
            })
        }
    }
}
</script>

<style>
.news_table{
    width: 700px;
    margin: 0 auto;
    text-align:center;
}
</style>