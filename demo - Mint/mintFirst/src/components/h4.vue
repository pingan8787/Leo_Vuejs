<template>
  <div class="h4">
    <h2>这是popup页面</h2>
    <mt-button>中部弹出popup</mt-button>
    <mt-button>上部弹出popup</mt-button>
    <mt-button>右部弹出popup</mt-button>
    <mt-button>下部弹出popup</mt-button>
    <mt-popup v-model="popupVisible" position="bottom"></mt-popup>
  </div>
</template>

<script>

export default {
  name: 'h4',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
button{
    display:block;
    margin:0.5rem auto;
}
</style>
