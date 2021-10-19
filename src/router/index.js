import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'App',
    component: () => import('@/App'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home'),
  },
  {
    path: '/view',
    name: 'View',
    component: () => import('@/views/View'),
  },
];

export default new Router({
  routes,
});
