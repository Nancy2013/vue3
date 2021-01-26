/*
 * @Author: your name
 * @Date: 2019-05-13 11:40:33
 * @LastEditTime: 2020-10-23 14:51:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-cli3-pc\src\router\index.js
 */
import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('viewsPath/Home.vue');

const context = require.context('./routes', false, /^\.\/(?!index)[^/]*\.js$/);

const childrenRoutes = context.keys().reduce((rs, key) => {
  rs.push(...context(key).default);
  return rs;
}, []);

Vue.use(Router);

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  ...childrenRoutes,
  {
    path: '*',
    component: () => import('viewsPath/Error404/index.vue'),
  },
];
const router = new Router({
  routes,
});
export default router;
