# Vuex核心概念整理
## 1、安装和使用
npm安装：  
```
npm install vuex --save
```

使用：
```
// main.js
import Vuex from "vuex"

const store = new Vuex.Store({
    state : {
        name:'leo'
    },
    mutations:{...},
    getters:{...},
    actions:{...},
    modules:{...},
})

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
```

## 1、State 使用
`Vuex` 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。至此它便作为一个“唯一数据源 (SSOT)”而存在。这也意味着，每个应用将仅仅包含一个 `store` 实例。单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。

```
// Childer.vue
名字：<span v-text="name"></span>

import {mapState} from "vuex"
export default {
    data(){
        return {
            localName:'pingan'
        }
    }
    // 常规实现方法
    computed:{
        name(){
            return this.$store.state.name
        }
    }
    // 使用mapState辅助函数 传入对象参数
    computed:mapState({
        // 使用方法1：箭头函数可以使代码更简洁
        name:state=>state.name,
        // 使用方法2：传字符串参数 'count' 等同于 `state => state.count`
        name:'name'
        // 使用方法3：为了能够使用 `this` 获取局部状态，必须使用常规函数
        localData(state){
            return state.name + this.localName
        }
    })

    // 使用mapSatate辅助函数 传入数组参数
    computed:mapState([
        // 映射 this.name 为 store.state.name
        'name'
    ])

    // mapState和局部计算属性computed混合使用
    computed:{
        testName(){ /* ... */},
        // 使用对象展开运算符将此对象混入到外部对象中
        ...mapState({
            // ...
        })
    }
}
```


## 2、Getter 使用
有时候我们需要从 `store` 中的 `state` 中派生出一些状态，例如对列表进行过滤并计数：
```
// main.js
const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    // Getter 也可以接受其他 getter 作为第二个参数：
    doneTodosCount: (state, getters) => {
        return getters.doneTodos.length
    },
    // 通过让 getter 返回一个函数，来实现给 getter 传参。在你对 store 里的数组进行查询时非常有用。
    getTodoById: (state) => (id) => {
        return state.todos.find(todo => todo.id === id)
    }
  }
})

// Childer.vue
// Getter 会暴露为 store.getters 对象
import {mapGetters} from "vuex"

created(){
    console.log(this.$store.getters.doneTodos)       // -> [{ id: 1, text: '...', done: true }]
    console.log(this.$store.getters.doneTodosCount ) // -> 1
}
computed:{
    doneTodosCount () {
        return this.$store.getters.doneTodosCount
    },
    // 使用mapGetters辅助函数 传入数组参数
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
        'doneTodosCount',
    ])
    // 使用mapGetters辅助函数 传入对象参数
    // 为getter属性命名
    ...mapGetters({
        doneCount:'doneTodosCount'
    })
}
```


## 3、Mutation 使用
更改 `Vuex` 的 `store` 中的状态的唯一方法是提交 `mutation`。`Vuex` 中的 `mutation` 非常类似于事件：每个 `mutation` 都有一个字符串的 `事件类型 (type)` 和 一个 `回调函数 (handler)`。   
这个回调函数就是我们实际进行状态更改的地方，并且它会接受 `state` 作为第一个参数：  
```
// main.js
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      // 变更状态
      state.count++
    }
  }
})
```
不可直接调用一个 `mutation handler`。这个选项更像是事件注册：“当触发一个类型为 `increment` 的 `mutation` 时，调用此函数。”要唤醒一个 `mutation handler`，你需要以相应的 `type` 调用 `store.commit` 方法：
```
// main.js
store.commit('increment')

// Childer.vue
<button @click="fun">测试</button>

methods:{
    fun(){
        this.$store.commit('increment')
    }
}
```

需要向 `store.commit` 传入额外的参数，即 `mutation` 的 载荷（payload）：
```
// main.js
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    // 传入参数方式1
    increment (state, n) {
      state.count += n
    }

    // 传入参数方式2
    increment (state, payload) {
      state.count += payload.amount
    }
  }
})

// 传入参数方式1  -  提交
store.commit('increment', 10)
// 传入参数方式2  -  提交
store.commit('increment', {amount: 10})
// 传入参数方式2  -  提交  对象形式
store.commit({
  type: 'increment',
  amount: 10
})

// Childer.vue
<button @click="incrementBy({amount:11})">测试</button>
import {mapMutations} from "vuex"

methods:{
    fun(){
        // 传入参数方式1  -  提交
        this.$store.commit('increment', 10)
        // 传入参数方式2  -  提交
        this.$store.commit('increment', {amount: 10})
        // 传入参数方式2  -  提交  对象形式
        this.$store.commit({type: 'increment',amount: 10})
    },
    // 组件中提交Mutation  传入数组
    ...mapMutations([
        'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

        // `mapMutations` 也支持载荷：需要在调用的地方传入参数
        'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ])
    // 组件中提交Mutation  传入对象
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
}
```

一条重要的原则就是要记住 mutation 必须是同步函数。  

## 4、Action 使用
`Action` 类似于 `mutation`，不同在于：  
* `Action` 提交的是 `mutation`，而不是直接变更状态。  
* `Action` 可以包含任意异步操作。  

注册一个简单的`action`:  
```
// main.js
const store = new Vuex.Store({
    state:{
        count:0
    },
    mutations:{
        increment(state){
            state.count ++
        }
    },
    actions:{
        // 常用写法
        increment(context){
            context.commit('incremnet')   // 通过 context.commit 提交一个 mutation
        },
        // 简化写法 使用 ES6 参数结构 
        increment({commit}){
            commit('increment')
        }
    }
})
```

通过 `store.dispatch` 方法来触发 `action` 来提交修改：  
```
// Childer.vue
<button @click="incrementBy({amount:11})">测试</button>

import {mapActions} from "vuex"

methods:{
    fun(){
        // 简单使用
        this.$store.dispatch('increment')

        // 以荷载形式分发
        this.$store.dispatch('incremrnt',{amount: 11})

        // 以对象形式分发
        this.$store.dispatch({
            type:'increment',
            amount: 11
        })
    },
    // 在组件中分发 Action
    ...mapActions([
        'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

        // `mapActions` 也支持载荷：
        'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
    ]),
    ...mapActions({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    })
}
```
组合 `Action` ，可以使用 `new Promise` 实现同步：  
具体查看 [点击查看](https://vuex.vuejs.org/zh-cn/actions.html)    


## 5、Module
由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，`store` 对象就有可能变得相当臃肿。  
为了解决以上问题，`Vuex` 允许我们将 `store` 分割成模块（module）。每个模块拥有自己的 `state`、`mutation`、`action`、`getter`、甚至是嵌套子模块——从上至下进行同样方式的分割：  
```
// main.js
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态

```
模块的局部状态   
对于模块内部的 `mutation` 和 `getter`，接收的第一个参数是模块的 `局部状态对象` 。  
```
// main.js
const moduleA = {
  state: { count: 0 },
  mutations: {
    increment (state) {
      // 这里的 `state` 对象是模块的局部状态
      state.count++
    }
  },

  getters: {
    doubleCount (state) {
      return state.count * 2
    }
  }
}
```
同样，对于模块内部的 `action`，局部状态通过 `context.state` 暴露出来，根节点状态则为 `context.rootState`：  
```
const moduleA = {
  // ...
  actions: {
    incrementIfOddOnRootSum ({ state, commit, rootState }) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit('increment')
      }
    }
  }
}
```
对于模块内部的 `getter`，根节点状态会作为第三个参数暴露出来：  
```
const moduleA = {
  // ...
  getters: {
    sumWithRootCount (state, getters, rootState) {
      return state.count + rootState.count
    }
  }
}
```


## 6、项目结构
`Vuex` 并不限制你的代码结构。但是，它规定了一些需要遵守的规则：   
* 应用层级的状态应该集中到单个 `store` 对象中。   
* 提交 `mutation` 是更改状态的唯一方法，并且这个过程是同步的。   
* 异步逻辑都应该封装到 `action` 里面。   

只要你遵守以上规则，如何组织代码随你便。如果你的 `store` 文件太大，只需将 `action`、`mutation` 和 `getter` 分割到单独的文件。

对于大型应用，我们会希望把 `Vuex` 相关代码分割到模块中。下面是项目结构示例：
```
├── index.html
├── main.js
├── api
│   └── ... # 抽取出API请求
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        ├── cart.js       # 购物车模块
        └── products.js   # 产品模块
```
参考[购物车示例](https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart)。

## Vuex源码分析：
1. [源码分析(上)](https://www.imooc.com/article/14739)
2. [源码分析(中)](https://www.imooc.com/article/14740)
3. [源码分析(下)](https://www.imooc.com/article/14741)

## 参考demo
1. [Vue 全家桶 + axios 前端实现登录拦截、登出、拦截器等功能](https://github.com/superman66/vue-axios-github)
2. [一款基于Vue2.0高仿微信App的单页应用 ](https://github.com/zhaohaodang/vue-WeChat)