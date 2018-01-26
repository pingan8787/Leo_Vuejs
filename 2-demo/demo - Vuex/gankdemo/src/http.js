import router from './router'
import store from './store/store'
import axios from 'axios'
import * as types from './store/types'

// axios 配置   使用手册  https://www.kancloud.cn/yunye/axios/234845
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://gank.io/api';

// http request 拦截器
axios.interceptors.request.use(
    // 在发送请求之前做什么
    (config) => {
        // 由于这里不是做原来那个项目  所以不需判断token
        // if(store.state.token){
        //     config.headers.Authorization = `token ${store.state.token}`;
        // }
        return config;
    },
    // 对请求错误做什么
    (err) => {
        return Promise.reject(err);
    }
)

// http response 拦截器
axios.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        console.log(error)
        if(error.response){
            switch (error.response.status){
                case 401 :
                    // 401 清理token信息并跳转登录页
                    store.commit(types.LOGOUT)
                    router.replace({
                        path:'login',
                        query:{redirect:router.currentRoute.fullPath}
                    })
            }
        }
        return Promise.reject(error.response.data)
    }
);

export default axios;