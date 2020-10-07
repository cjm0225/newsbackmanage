import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../views/Home'
import Login from '../views/Login'
import Error from '../views/Error'

// 注册路由
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "*",
    component: Error
  }
]

const router = new VueRouter({
  routes
})

export default router
