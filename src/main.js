/*
 * @Author: your name
 * @Date: 2019-05-09 10:28:03
 * @LastEditTime: 2020-09-02 14:40:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-framework-cli\src\main.js
 */
import Vue from 'vue';
import router from 'routerPath/index';
import store from 'storePath/index';
import App from './App.vue';

import libs from './libs';

import plugins from './plugins';
import 'stylesPath/index';


libs(Vue);
plugins(Vue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  ...App,
}).$mount('#app');
