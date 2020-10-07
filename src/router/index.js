import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../views/Home'
import ArticleList from '../views/ArticleList'
import EditArticle from '../views/EditArticle'



import Login from '../views/Login'
import Error from '../views/Error'

// 注册路由
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/home",
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: "articleList",
      },
      {
        path: 'articleList',
        name: "ArticleList",
        component: ArticleList,
      },
      {
        path: 'editArticle',
        name: "EditArticle",
        component: EditArticle,
      },

    ],
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

// 路由守卫
router.beforeEach((to, form, next) => {
  if (to.path === "/login") {
    next();
  } else {
    if (localStorage.getItem("token")) {
      next();
    } else {
      alert("请先登录");
      router.push("/login");
    }
  }
});


export default router
