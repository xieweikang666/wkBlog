<template>
  <div>
    <router-link to="/">
      <img id="leave" src="../../../static/user/退出.png" alt />
    </router-link>
    <div class="top">
      <i class="el-icon-finished"></i>
      <em>The best preparation for tomorrow is doing your best today.</em>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.top {
  margin-top: 30px;
  float: right;
  font: small-caps bold 24px/1 sans-serif;
  color: white;
}
#leave {
  width: 30px;
  float: left;
  margin-top: 15px;
  cursor: pointer;
  background: white;
}
</style>