<template>
  <div>
    <img class="top-icon" src="../../../static/user/退出.png" title="注销" alt="注销" @click="logout()" />
    <img
      class="top-icon"
      src="../../../static/face/map.png"
      title="查看地图"
      alt="seeMap"
      @click="seeMap()"
    />
    <div class="top">
      <i class="el-icon-finished"></i>
      <em>The best preparation for tomorrow is doing your best today.</em>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$confirm("您要注销吗？", "提示", {
        confirmButtonText: "yeah",
        cancelButtonText: "no",
        type: "warning"
      })
        .then(() => {
          sessionStorage.setItem("user-token", null);
          this.$notify({
            type: "success",
            title: "登出成功",
            message: "用户选择登出操作",
            showClose: false
          });
          setTimeout(() => {
            this.$router.push("/");
          }, 1000);
        })
        .catch(() => {
          this.$notify({
            type: "info",
            title: "取消登出",
            message: "用户取消登出",
            showClose: false
          });
        });
    },
    seeMap() {
      this.$router.push("/addressMap");
    }
  }
};
</script>

<style>
.top {
  margin-top: 30px;
  float: right;
  font: small-caps bold 24px/1 sans-serif;
  color: white;
}
.top-icon {
  width: 30px;
  float: left;
  margin-top: 15px;
  margin-right: 15px;
  cursor: pointer;
  background: white;
}
</style>