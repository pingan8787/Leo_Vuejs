import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/Index'
import Tuijian from '@/components/news/Tuijian'
import Shipin from '@/components/news/Shipin'
import Redian from '@/components/news/Redian'
import Shehui from '@/components/news/Shehui'
import Yule from '@/components/news/Yule'
import Junshi from '@/components/news/Junshi'
import Keji from '@/components/news/Keji'
import Qiche from '@/components/news/Qiche'
import Caijing from '@/components/news/Caijing'
import Addhobby from '@/components/Addhobby'
import Search from '@/components/Search'
Router.prototype.goBack = function() {
    window.history.go(-1)
}
Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: Index,
            children: [{
                    //这边有个重复命名的问题，问题不大，现在先不急
                    path: '',
                    name: 'Tuijian',
                    component: Tuijian
                },
                {
                    path: '/news/tuijian',
                    name: 'Tuijian',
                    component: Tuijian
                },
                {
                    path: '/news/shipin',
                    name: 'Shipin',
                    component: Shipin
                },
                {
                    path: '/news/redian',
                    name: 'Redian',
                    component: Redian
                },
                {
                    path: '/news/shehui',
                    name: 'Shehui',
                    component: Shehui
                },
                {
                    path: '/news/yule',
                    name: 'Yule',
                    component: Yule
                },
                {
                    path: '/news/junshi',
                    name: 'Junshi',
                    component: Junshi
                },
                {
                    path: '/news/keji',
                    name: 'Keji',
                    component: Keji
                },
                {
                    path: '/news/qiche',
                    name: 'Qiche',
                    component: Qiche
                },
                {
                    path: '/news/caijing',
                    name: 'Caijing',
                    component: Caijing
                }
            ]
        },
        {
            path: '/Addhobby',
            name: 'Addhobby',
            component: Addhobby
        },
        {
            path: '/Search',
            name: 'Search',
            component: Search
        }
    ]
})

export default router