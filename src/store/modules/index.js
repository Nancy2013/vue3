/*
 * @Author: your name
 * @Date: 2020-03-18 16:03:49
 * @LastEditTime: 2020-09-02 15:09:18
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-cli3-pc\src\store\modules\index.js
 */
const context = require.context('./', false, /^\.\/(?!index)[^/]*\.js$/);

const modules = context.keys().reduce((module, key) => {
  const name = key.replace(/(^\.\/|\.js$)/g, '');
  module[name] = context(key).default;
  return module;
}, {});

export default modules;
