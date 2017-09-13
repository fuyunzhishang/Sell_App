// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResoure from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
import Vuex from 'vuex';

Vue.use(VueRouter);
Vue.use(VueResoure);
Vue.use(Vuex);

Vue.config.productionTip = false;

const routes = [
    { path: '/goods', component: goods },
    { path: '/ratings', component: ratings },
    { path: '/seller', component: seller }
];

const router = new VueRouter({
    routes,
    linkActiveClass: 'active'
});

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
/* eslint-disable eol-last */