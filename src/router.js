import VueRouter from 'vue-router'

// 导入对应的路由组件
import homeContainer from './components/tabber/homeContainer.vue'
import memberContainer from './components/tabber/memberContainer.vue'
import searchContainer from './components/tabber/searchContainer.vue'
import shopcarContainer from './components/tabber/shopcarContainer.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home', component:homeContainer},
    {path:'/member', component:memberContainer},
    {path:'/search', component:searchContainer},
    {path:'/shopcart', component:shopcarContainer}
  ],
  linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router