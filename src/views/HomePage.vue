<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <UserInfo></UserInfo>Main
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import UserInfo from "../components/Home/UserInfo";
export default {
  components: {
    UserInfo
  }
};
</script>

<style>
/* 面向所有的👇 */
* {
  margin-top: 0px;
  margin-left: 0px;
}

.el-header {
  background: orange;
}
.el-main {
  background: antiquewhite;
  height: 87vh;
}
.el-footer {
  background: olivedrab;
}
</style>