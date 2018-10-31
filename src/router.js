import Vue from 'vue'
import Router from 'vue-router'
//引入自定义组件
import HomeContainer from "./components/tabbar/HomeContainer.vue"
import ShopContainer from "./components/tabbar/ShopContainer.vue"
import DiscoveryContainer from "./components/tabbar/DiscoveryContainer.vue"
import MyContainer from "./components/tabbar/MyContainer.vue"



Vue.use(Router)
//指定该组件访问路径
export default new Router({
  routes: [
    {path:"/",redirect:"/home"}, 
    {path:'/home',component:HomeContainer},
    {path:'/shop',component:ShopContainer},
    {path:'/discovery',component:DiscoveryContainer},
    {path:'/my',component:MyContainer}   
    
  ],linkActiveClass:"mui-active" 
})
