/*
 * @Author: your name
 * @Date: 2019-05-13 11:40:33
 * @LastEditTime: 2020-03-18 10:49:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-cli3-pc\src\router\routes\app.js
 */
const Login = () => import('viewsPath/login/index.vue');
const app = {
  // 设备管理
  path: '/login',
  name: '登录',
  show: true,
  component: Login,
};

export default [app];
