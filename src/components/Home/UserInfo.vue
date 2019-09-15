<template>
  <div class="userinfo">
    <el-card shadow="hover">
      <div slot="header" class="clearfix">
        <img src="../../../static/user/头像.png" alt />
        <span>臭弟弟</span>
      </div>
      <span>dadsaads</span>
      <div class="decorate">
        <img src="../../../static/face/happyface.png" alt />
        <img src="../../../static/face/sleepface.png" alt />
        <img src="../../../static/face/sadface.png" alt />
        <img src="../../../static/face/happyface.png" alt />
        <img src="../../../static/face/sleepface.png" alt />
        <img src="../../../static/face/sadface.png" alt />
        <img src="../../../static/face/happyface.png" alt />
        <img src="../../../static/face/sleepface.png" alt />
      </div>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.userinfo {
  position: fixed;
  right: 10px;
}
.userinfo .el-card {
  width: 300px;
  overflow: hidden;
}
.userinfo img {
  vertical-align: middle;
  width: 40px;
  margin-right: 10px;
}
.userinfo .decorate img {
  width: 20px;
  margin-left: 5px;
  margin-right: 0px;
  transition: 0.5s;
}
.userinfo .decorate img:hover {
  width: 30px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>