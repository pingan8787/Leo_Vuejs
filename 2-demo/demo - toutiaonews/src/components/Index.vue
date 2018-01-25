<template>
  <div id="Index">
    <headers></headers>
    <div class="main-page">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import headers from './Header'

export default {
  name: 'Index',
  components: { headers }
}
</script>

<style>
html,body{
  margin:0;
  padding:0;
}
.main-page{
  padding-top:175px;
  font-size:50px;
}
</style>
