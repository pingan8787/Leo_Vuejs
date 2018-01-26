<template>
    <div>
        欢迎用户：{{user}} 登录!
        <form>
            <fieldset>
                <legend>登录信息</legend>
                帐号：<input type="text" v-model="userName"/>
                密码：<input type="text" v-model="userPwd"/>
                <button @click="login">登录</button>
                <!-- <button @click="changePwd">修改密码</button> -->
            </fieldset>
        </form>
    </div>
</template>

<style>

</style>

<script>
import {mapState} from 'vuex'
import * as types from '../store/types'
export default {
    name:'login',
    data(){
        return {
            userName:'',
            userPwd:'',
            token:'',
        }
    },
    computed:mapState({
        user:'user'
    }),
    created(){
        let that = this;
        that.userName = that.$store.state.user;
        that.userPwd  = that.$store.state.password;
        // 初始化登录信息的localstorage
        // this.$store.commit(types.INITLOGIN);
    },
    methods:{
        login(){
            // if(this.token){
                let data = {'type':'login','userName':this.userName,'userPwd':this.userPwd}
                this.$store.commit(types.LOGIN,data)
                let redirect = decodeURIComponent(this.$route.query.redirect || '/');
                this.$router.push({  path: redirect })
            // }
        },
        // changePwd(){
        //     this.$store.commit(types.LOGIN,{'type':'change','userName':this.userName,'userPwd':this.userPwd})
        // }
    }
}

</script>