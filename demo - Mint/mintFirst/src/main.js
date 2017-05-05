// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import { Header, Loadmore, InfiniteScroll, Actionsheet, Popup } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Actionsheet.name, Actionsheet);
Vue.component(Popuo.name, Popup)

Vue.config.productionTip = false
Vue.use(Mint);
Vue.use(InfiniteScroll);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})