import Vue from 'vue'
import Router from 'vue-router'
import Book from '@/components/page/book'
import Image from '@/components/page/image'
import Movie from '@/components/page/movie'
import Music from '@/components/page/music'
import Login from '@/components/common/login'
import Personal from '@/components/common/personal'
import Test from '@/components/common/test'
import Home from '@/views/home/home'
import MusicList from '@/components/page/music_list'
import ImageDetail from '@/components/page/image_detail'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home,
        children: [{
                path: '',
                name: 'Movie',
                component: Movie
            },
            {
                path: '/music',
                name: 'Music',
                component: Music
            },
            {
                path: '/book',
                name: 'Book',
                component: Book
            },
            {
                path: '/image',
                name: 'Image',
                component: Image
            }
        ]
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/personal',
        name: 'Personal',
        component: Personal
    }, {
        path: '/test',
        name: 'Test',
        component: Test
    }, {
        path: '/music/music_list/:id/:name',
        name: 'MusicList',
        component: MusicList
    }, {
        path: '/image/image_detail/:url/:type',
        name: 'ImageDetail',
        component: ImageDetail
    }, {
        path: '*',
        component: Movie
    }]
})