<template>
    <div class="loginpage">
        <div class="login-input">
            <transition name="fold">
                <div class="login-block" v-show="showinput">
                    <div class="user-img">
                        <img src="../../assets/user-img.jpg">
                    </div>
                    <input type="text" class="login-user" v-model="inputuser"><br>
                    <input type="password" class="login-pwd" v-model="inputpwd"><br>
                </div>
            </transition>
            <transition name="fold">
                <div class="regist-block" v-show="!showinput">
                    <div>
                    <span>注册</span>
                    </div>
                    <input type="text" class="login-user" v-model="ruser"><br>
                    <input type="password" class="login-pwd" v-model="rpwd"><br>
                    <input type="password" class="login-pwd" v-model="rpwd2"><br>
                </div>
            </transition>
            <button @click="login">登录</button>
            <button @click="regist()" v-show="showinput">注册</button>
            <button @click="submit()" v-show="!showinput">提交</button>
            <mt-popup v-model="popupVisible" position="top" class="top-popup">
                测试用户名：leo , 密码：123456
            </mt-popup>

        </div>
    </div>

</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            inputuser:'',
            inputpwd:'',
            showinput:true,
            ruser:'',
            rpwd:'',
            rpwd2:'',
            popupVisible:true,
            isLogin:false
        }
    },
    created(){
        setInterval(()=>{this.popupVisible = false;},2500)//顶部popup自动关闭
    },
    methods:{
        login(){
            this.showinput = true;
            let username = this.inputuser;
            let userpwd = this.inputpwd;
            if(username=='leo'&&userpwd=='123456'){
                this.isLogin = true;
                this.$router.push({name:'Movie'});
            }else{
                Toast({
                    message: '请输入正确账号密码!',
                    iconClass: 'icon icon-success',
                    duration:1500
                });
            }
            console.log('用户名：'+username+'；密码：'+userpwd)
        },
        regist(){
            this.inputuser = '';
            this.inputpwd = '';
            this.showinput = false;
        },
        submit(){
            if(this.ruser!=''&&this.rpwd!=''&&this.rpwd2!=''&this.rpwd==this.rpwd2){
                Toast({
                    message: '注册成功！返回登录',
                    iconClass: 'icon icon-success',
                    duration:1500
                });
            }else{
                Toast({
                    message: '注册失败！重新填写',
                    iconClass: 'icon icon-fail',
                    duration:1500
                });
                this.ruser='';
                this.rpwd='';
                this.rpwd2='';
            }
            console.log('用户名：'+this.ruser+'；密码1：'+this.rpwd+'；密码2：'+this.rpwd2)
        }
    }
}
</script>

<style>
.loginpage{
    width:100%;
    height:100%;
    background:url('../../assets/login.jpg') no-repeat;
    background-size:cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.login-input input{
    width:60%;
    height:30px;
    line-height:30px;
    font-size:20px;
    color:#fff;
    padding-left:35px;
    background-color: rgba(255,255,255,0);
    border:0;
    border-bottom:1px solid #fff;
    margin-top:10px;
}
.login-input .login-user{
    background:url('../../assets/icon/username.png') no-repeat;
    background-size:contain;
}
.login-input .login-pwd{
    background:url('../../assets/icon/Password.png') no-repeat;
    background-size:contain;
}
.user-img img{
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border: 2px solid #fff;
}
.login-input button{
    color: #fff;
    border: 1px solid #fff;
    background-color: rgba(255,255,255,0);
    margin-top: 10px;
    height: 36px;
    border-radius: 5px;
    padding: 0 20px;
}
.regist-block span{
    font-size:22px;
    color:#fff;
}
.loginpage .login-input .top-popup{
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #fff;
    background-color: rgba(255,255,255,0.1);
    border-bottom: 1px solid #555;
}
// 切换动画 待完善
.fold-enter-active {
  animation-name: fold-in;
  animation-duration: .5s;
}
.fold-leave-active {
  animation-name: fold-out;
  animation-duration: .5s;
}
@keyframes fold-in {
  0% {
    transform: translate3d(0, 100%, 0);
  }
  50% {
    transform: translate3d(0, 50%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fold-out {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 50%, 0);
  }
  100% {
    transform: translate3d(0, 100%, 0);
  }
}
</style>