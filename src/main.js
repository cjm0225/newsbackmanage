import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './axios'

// 全局引入elementUI模块
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

Vue.config.productionTip = false



new Vue({
  router,
  axios,
  render: function (h) { return h(App) }
}).$mount('#app')
