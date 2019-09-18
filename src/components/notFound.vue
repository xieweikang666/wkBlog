<template>
  <div class="notFound">
    <img src="static\404page.jpg" alt />
    <p>4 0 4</p>
    <span>没找到你要的页面，但我给你设计了个漂亮的404界面~</span>
    <br />
    <span class="goHome" @click="goHome()">返回首页</span>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.notFound {
  text-align: center;
  color: white;
}
.notFound img {
  position: absolute;
  z-index: -1;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
}
p {
  margin-top: 0px;
  margin-bottom: 50px;
  font-size: 200px;
  font-weight: bold;
}
.notFound span {
  font-size: 20px;
  font-weight: lighter;
}
.goHome {
  cursor: pointer;
}
</style>