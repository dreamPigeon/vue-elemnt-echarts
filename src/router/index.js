import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// 声明使用vue插件
Vue.use(VueRouter)

const router = new VueRouter({
  // 路由路径没有#

  // 项目中所有路由
  routes
})
export default router