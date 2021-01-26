const path = require('path');

const srcRoot = path.resolve(__dirname, './src');

module.exports = () => ({
  '@': srcRoot,
  configPath: '@/config',
  commonPath: '@/common',
  componentsPath: '@/components',
  filterPath: '@/filter',
  routerPath: '@/router',
  stylesPath: '@/styles',
  storePath: '@/store',
  viewsPath: '@/views',
  servicePath: '@/service',
});
