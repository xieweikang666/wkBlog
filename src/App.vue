<template>
  <div id="app">
    <!-- 若路径未能匹配，则跳转到404界面 -->
    <notFound v-if="invalidRoute"></notFound>
    <!-- 若路径匹配，则显示路由界面 -->
    <router-view v-else />
  </div>
</template>

<script>
import notFound from "../src/components/notFound.vue";

export default {
  name: "App",
  components: {
    notFound
  },
  computed: {
    invalidRoute() {
      return !this.$route.matched || this.$route.matched.length === 0;
    }
  }
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
