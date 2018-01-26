import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import * as types from '../store/types'
import Main from '@/components/Main'
import Login from '@/components/login'
import News from '@/components/news'
import changeMessage from '@/components/changeMessage'
import todolist from '@/components/todolist'

Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path:'/news',
    name:'news',
    meta: {
      requireAuth: true,
    },
    component:News
  },
  {
    path:'/changeMessage',
    name:'changeMessage',
    meta:{
      requireAuth: true
    },
    component:changeMessage
  },
  {
    path:'/todolist',
    name:'todolist',
    meta:{
      requireAuth: true
    },
    component:todolist
  },
  {
    path:'/login',
    name:'login',
    component:Login
  }
]

// 页面刷新时，重新赋值token
let localToken = window.localStorage.getItem('token');
if(localToken){ store.commit(types.LOGIN,localToken)}

const router = new Router({
  routes
})

// 路由拦截，若无数据则返回login页面
router.beforeEach((to, from, next) => {
  // to:目标路由  from:起始路由  next:继续执行
  if(to.matched.some(r => r.meta.requireAuth)){
    if(store.state.token){
      next();
    }else{
      alert('请先登录！')
      next({
        path:'/login',
        query:{redirect:to.fullPath}
      })
    }
  }else{
    next();
  }
})

export default router;
