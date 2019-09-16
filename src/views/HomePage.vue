<template>
  <div>
    <el-container>
      <el-header>
        <TopHeader></TopHeader>
      </el-header>
      <el-main>
        <UserInfo></UserInfo>
        <WriteBlog></WriteBlog>
        <Blogs></Blogs>
      </el-main>
      <el-footer>
        <FooterInfo></FooterInfo>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import UserInfo from "../components/Home/UserInfo";
import Blogs from "../components/Home/Blogs";
import TopHeader from "../components/Home/TopHeader";
import WriteBlog from "../components/Home/WriteBlog";
import FooterInfo from "../components/Home/FooterInfo";

export default {
  components: {
    UserInfo,
    Blogs,
    TopHeader,
    WriteBlog,
    FooterInfo
  }
};
</script>

<style>
/* 面向所有的👇 */
* {
  margin-top: 0px;
  margin-left: 0px;
  margin-right: 0px;
}

.el-header {
  background: green;
}
.el-main {
  background: rgb(241, 241, 241);
  /* height: 87vh; */
}
.el-footer {
  background: olivedrab;
}
</style>