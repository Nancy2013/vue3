<!--
 * @Author: your name
 * @Date: 2019-05-13 14:20:59
 * @LastEditTime: 2020-03-12 13:59:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-framework-cli\src\views\login\index.vue
 -->
<template>
  <div>
    <h1>{{ userInfo.userName }}</h1>
  </div>
</template>

<script>
import service from 'servicePath/index';
import { mapState, mapGetters, mapActions } from 'vuex';

const { appAsk } = service;
export default {
  name: 'Login',
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState('app', ['userInfo']),
  },
  watch: {},
  created() {
    const params = {
      userName: 'aux2611',
      passwd: '123',
    };
    this.setUserLogin(params);
  },
  mounted() {},
  methods: {
    ...mapActions('app', ['setUserLogin']),
  },
};
</script>

<style lang="scss" scoped>
</style>
