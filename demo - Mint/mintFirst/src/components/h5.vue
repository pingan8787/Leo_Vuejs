<template>
  <div class="h5">
    <h2>这是Swipe页面</h2>
      <mt-swipe :auto="4000">
        <mt-swipe-item class="item1">1111</mt-swipe-item>
        <mt-swipe-item class="item2">2222</mt-swipe-item>
        <mt-swipe-item class="item3">3333</mt-swipe-item>
      </mt-swipe>
  </div>
</template>

<script>

export default {
  name: 'h5',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.item1,.item2,.item3{
  color:#000;
  width:100%;
  height:300px;
  line-height:300px;
  border:1px solid red;
}
.item1{
  background-color:red;
}
.item2{
  background-color:green;
}
.item3{
  background-color:blue;
}
</style>
