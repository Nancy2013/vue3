<!--
 * @Author: your name
 * @Date: 2019-05-09 10:28:03
 * @LastEditTime: 2020-03-16 10:03:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-framework-cli\src\views\about\index.vue
 -->
<template>
  <div class="about">
    <h1>
      {{ message }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      message: 'this is about page',
    };
  },
};
</script>

<style lang="less" scoped>
h1 {
  background: url('./../../assets/images/logo.png');
}
</style>
