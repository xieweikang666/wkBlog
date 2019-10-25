<template>
  <div>
    <el-container>
      <el-header>
        <TopHeader></TopHeader>
      </el-header>
      <el-main>
        <UserInfo></UserInfo>
        <WriteBlog :uid="uid"></WriteBlog>
        <Blogs @sendUId="getUId"></Blogs>
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
  },
  data() {
    return {
      uid: ""
    };
  },
  methods: {
    getUId(id) {
      console.log("homepage获取到来自blog组件传递的uid:" + id);
      this.uid = id;
    }
  }
};
</script>

<style>
/* 面向所有的👇 */
* {
  margin-top: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
}
.el-header {
  background: green;
}
.el-main {
  background: rgb(241, 241, 241);
  height: 88vh;
}
.el-footer {
  width: 100%;
  height: 20px;
  background: rgb(151, 150, 146);
}
</style>