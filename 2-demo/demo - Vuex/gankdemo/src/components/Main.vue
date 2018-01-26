  <template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h2>{{ user }}</h2>
    <h2>功能按钮</h2>
    <router-link to="/news">新闻</router-link>
    <router-link to="/todolist">备忘录</router-link>
    <router-link to="/login">登录</router-link>
    <router-link to="/changeMessage">修改资料</router-link>
    <br/>
    <button v-show="show_out" @click="logout">退出登录</button>
  </div>
</template>

<script>
import * as types from '../store/types'
import {mapState} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      show_out:false,
    }
  },
  computed:mapState({
      title: state => state.title,
      user: state => state.user
  }),
  created(){
    if(localStorage.getItem('token')){
      this.show_out = true;
    }
  },
  methods:{
    logout(){
      this.$store.commit(types.LOGOUT);
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
