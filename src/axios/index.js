import Vue from "vue"
import axios from "axios"
import { Message } from 'element-ui';

// Vue.use(Message);

// 将axios挂载到vue实例原型上
Vue.prototype.$axios = axios

// 设置默认路径
axios.defaults.baseURL = "http://127.0.0.1:3000"

// 响应拦截器
axios.interceptors.response.use(response => {
    const reg = /^4\d{2}$/;
    if (reg.test(response.data.statusCode)) {
        Message.error(response.data.message);
    }
    return response
})

export default axios