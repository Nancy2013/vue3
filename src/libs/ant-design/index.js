/*
 * @Description: 按需引用ant design vue组件
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-07 17:10:38
 * @LastEditTime: 2019-05-10 10:55:32
 */
import Radio from 'ant-design-vue/lib/button';
import Switch from 'ant-design-vue/lib/switch';

export default (Vue) => {
  Vue.use(Radio);
  Vue.use(Switch);
};
