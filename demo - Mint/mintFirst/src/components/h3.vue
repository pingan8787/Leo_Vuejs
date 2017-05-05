<template>
  <div class="h3">
    <h3 style="color:red;">这是Infinitescroll,Action sheet,messagebox页面</h3>
    <div class="acsheet">
        <h4>这是Action sheet</h4>
        <mt-button @click="sheetVisible = true">Action sheet</mt-button>
        <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>

    </div>
    <div class="msbox">
        <h4>这是messagebox</h4>
        <mt-button @click="alertbox">alert提醒框</mt-button>
        <mt-button @click="confirmbox">confirm提醒框</mt-button>
        <mt-button @click="promptbox">prompt提醒框</mt-button>
    </div>
    <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li v-for="item in list">{{ item }}</li>
    </ul>

  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';

export default {
  name: 'h3',
  data () {
    return {
      list:[1,2,3,4,5,6,7,8,9,10],
      sheetVisible:false,
      actions:[
          {
            name:'开始',
            method:this.acfn1 //!*  本地的方法需要加this
          },
          {
            name:'结束',
            method:this.acfn2
          }
      ]
    }
  },
  methods: {
      loadMore(){
          this.loading = true;
          setTimeout(()=>{
              let last = this.list[this.list.length - 1];
              for(let i = 1; i<=10 ; i++){
                this.list.push(last + i);
              }
              this.loading = false;
          },1500)
      },
      alertbox(){
        //MessageBox.alert(message, title);
        MessageBox.alert('你确定?', '说明').then(action => {
            console.log('alert点了确定,这里可以写成功执行的函数')
        });
        // MessageBox({
        //     title: '说明',
        //     message: '你确定?',
        //     showCancelButton: true
        // });
      },
      confirmbox(){
        MessageBox.confirm('你确定?', '说明').then(action => {
            console.log('confirm,成功执行的函数')
        },cancel => {
            console.log('confirm,取消执行的函数')
        });
      },
      promptbox(){
        MessageBox.prompt('你的名字是?', '说明').then(({ value, action }) => {
            console.log('输入的值是：'+value+',成功执行的函数')
        }, ({ value, cancel })=> {
            console.log('输入的值是：'+value+',prompt,取消执行的函数')
        });
      },
      acfn1(){
          console.log('点击了开始按钮')
      },
      acfn2(){
          console.log('点击了结束按钮')
      },
      sheetVisible(){}
  }
}
</script>

<style scoped>
ul{
  border:1px solid #9400D3;
  font-size:1rem;
  margin:0;
  padding:0;
}
ul li {
  list-style:none;
  border:1px solid #7CFC00;
  height:2rem;
  line-height:2rem;
}
.msbox{
    text-align:center;
}
button{
  font-size:1rem;
  display:block;
  margin:1rem auto;
  height:3rem;
  line-height:3rem;
}
</style>
