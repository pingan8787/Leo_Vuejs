import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        user:'leo',
        password:'123456',
        age:25,
        address:'福建省泉州市',
        token:null,
        title: '来来来 代码撸起来',
        todo:[]
    },
    mutations:{
        [types.LOGIN]:(state,data) => {
            localStorage.removeItem('token');
            localStorage.token = JSON.stringify(data);
            state.token = data;
        },
        [types.LOGOUT]:(state) => {
            localStorage.removeItem('token');
            state.token = null;
        },
        [types.TITLE]:(state,data) => {
            state.title = data;
        },
        [types.CHANGE]:(state,data) => {
            state.user = data.userName,
            state.password = data.userPwd
        },
        [types.ADDTODO]:(state,data) => {
            state.todo.push({name:data.name,desc:data.desc,date:data.date,num:data.num});
        },
        [types.DELTODO]:(state,data) => {
            state.todo.splice(data,1)
        }
    }
})