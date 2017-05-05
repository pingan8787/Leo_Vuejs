import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import h2 from '@/components/h2'
import h3 from '@/components/h3'
import h4 from '@/components/h4'
import h5 from '@/components/h5'
import h6 from '@/components/h6'
import h7 from '@/components/h7'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/h2',
            name: 'h2',
            component: h2
        },
        {
            path: '/h3',
            name: 'h3',
            component: h3
        },
        {
            path: '/h4',
            name: 'h4',
            component: h4
        },
        {
            path: '/h5',
            name: 'h5',
            component: h5
        },
        {
            path: '/h6',
            name: 'h6',
            component: h6
        },
        {
            path: '/h7',
            name: 'h7',
            component: h7
        }
    ]
})