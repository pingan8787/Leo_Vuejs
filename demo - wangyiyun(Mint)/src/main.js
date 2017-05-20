import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
Vue.prototype.$ajax = axios

Vue.use(MintUI)

Vue.config.productionTip = false
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})