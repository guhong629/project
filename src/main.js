// 入口文件
import Vue from 'vue'

// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 2.1 导入Vue-resource
import VueResource from 'vue-resource'
// 2.2 安装Vue-resource
Vue.use(VueResource)

// 导入mui的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入mint-UI组件
import {Header,Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)


// 1.3 导入自己的router.js 路由模块
import router from './router.js'

// 导入app根组件
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render:c => c(app),
    router  // 1.4 挂载到Vue实例上
})