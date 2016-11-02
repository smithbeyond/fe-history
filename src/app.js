import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'

Vue.use(VueRouter)

const router = new VueRouter();     // 常量
require('./vue_router')(router);

router.start(App,'#app');