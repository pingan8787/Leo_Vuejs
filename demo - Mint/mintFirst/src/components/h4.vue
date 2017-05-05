<template>
  <div class="h4">
    <h2>这是popup页面</h2>
    <span>更换弹出位置，修改position=>'top''right''bottom''left'</span>
    <mt-button @click="popupVisible = true">下部弹出popup</mt-button>
    <mt-popup class="div-items" v-model="popupVisible" position="bottom">
        <div class="span-items" v-for="(it,index) in slots" @click="send(index,it)">
            <span v-text="it"></span>
        </div>
    </mt-popup>
  </div>
</template>

<script>

export default {
  name: 'h4',
  data () {
    return {
        popupVisible:false,
        slots: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06']
    }
  },
  methods: {
      send(index,text){
          console.log('当前点击第'+index+'条；内容是：'+text)
      }
  }
}
</script>

<style scoped>
button{
    display:block;
    margin:0.5rem auto;
}
.div-items{
    width: 100%;
}
.span-items{
    width:100%;
    text-align:center;
    border-bottom: 1px solid #ddd;
    padding: 10px;
}
</style>
