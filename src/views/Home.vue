<!--
 * @Author: your name
 * @Date: 2019-05-09 10:28:03
 * @LastEditTime: 2020-03-16 10:26:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-framework-cli\src\views\Home.vue
 -->
<template>
  <div class="home">
    <img alt="Vue logo"
         src="../assets/images/logo.png">
    <img alt="Vue logo"
         src="images/404.png">
    <h1>{{ userInfo.userName }}</h1>
    <HelloWorld
      msg="Welcome to Your Vue.js App"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from 'componentsPath/HelloWorld.vue';
import service from 'servicePath/index';
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  computed: {
    ...mapState('app', ['userInfo']),
    // ...mapGetters('app', ['formatUserInfo']),
  },
  watch: {},
  created() {},
  methods: {
    ...mapActions('app', ['setUserLogin']),
  },
};
</script>
