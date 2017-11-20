// main.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './App.vue';
import Dashboard from './Dashboard.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.use(VueRouter);
// Vue.prototype.$http = axios;

const routes = [
  {
        name: 'Dashboard',
        path: '/',
        component: Dashboard
    }
];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
