<!--
 * @Author: your name
 * @Date: 2019-05-13 11:41:29
 * @LastEditTime: 2020-03-13 14:49:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-framework-cli\src\views\Error404\index.vue
 -->
<template>
  <div class="page-empty">
    <img src="images/404.png"
         alt="404"
         class="empty-img">
    <div class="empty-desc"
         isShow>
      哎呀，你的页面被带走了
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.page-empty {
  padding: 90px 0 50px;
  text-align: center;
}
.page-empty .empty-img {
  display: inline-block;
  width: 180px;
  height: 180px;
  margin-bottom: 24px;
}
img {
  vertical-align: middle;
  border-style: none;
}
.page-empty .empty-desc {
  margin-bottom: 20px;
  font-size: 16px;
}
.ux-btn-primary {
  color: #fff;
  background-color: #0b8ee9;
  border-color: #0b8ee9;
}
</style>
