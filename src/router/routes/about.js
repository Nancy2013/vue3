/*
 * @Author: your name
 * @Date: 2019-05-13 11:40:33
 * @LastEditTime: 2020-03-18 10:51:28
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-cli3-pc\src\router\routes\about.js
 */
const About = () => import('viewsPath/about/index.vue');
const about = {
  // 设备管理
  path: '/about',
  name: '关于',
  show: true,
  component: About,
};

export default [about];
