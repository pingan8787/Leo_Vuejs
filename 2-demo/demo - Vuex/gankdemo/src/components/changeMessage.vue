<template>
    <div>
        <h2>修改资料</h2>
        <div>原帐号：<span v-text="user"></span>，原密码：<span v-text="password"></span></div>
        <fieldset>
            <legend>账户信息</legend>
            帐号：<input type="text" v-model="userName"/>
            密码：<input type="text" v-model="userPwd"/>
        </fieldset>
        <button @click="save">提交</button>
    </div>
</template>

<script>
import * as types from '../store/types'
import {mapState} from 'vuex'
export default {
    data(){
        return {
            userName:'',
            userPwd:'',
        }
    },
    computed:mapState({
        user: state => state.user,
        password: state=>state.password
    }),
    methods:{
        save(){
            let data = {"userName":this.userName,"userPwd":this.userPwd}
            this.$store.commit(types.CHANGE,data)
        }
    },
}
</script>

<style>

</style>