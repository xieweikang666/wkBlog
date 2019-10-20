<template>
  <div class="blogs">
    <transition-group
      enter-active-class="animated bounceInDown"
      leave-active-class="animated wobble"
    >
      <!-- 因为在transition-group子元素上，不能使用v-for索引作为键，否则与不使用键相同，所以：key值绑定的不能是index，得要换成userBlogs -->
      <el-card v-for="(list,index) in list" :key="list.blog_id">
        <div slot="header">
          <i class="el-icon-edit"></i>
          <strong>{{list.blog_id}}</strong>
          <em>{{list.blog_title}}</em>
          <el-button
            style="float: right; padding: 3px 0;color:green;"
            type="text"
            @click="editBlog(list.blog_id)"
          >编辑</el-button>
        </div>
        <span>{{list.blog_content}}</span>
        <br />
        <time class="time">{{ list.blog_time }}</time>
        <el-button
          style="float: right; padding: 1px 0;color:gray;"
          type="text"
          @click="deleteBlogs(index)"
        >删除</el-button>
      </el-card>
    </transition-group>
  </div>
</template>

<script>
import jwt from "jsonwebtoken";
export default {
  data() {
    return {
      uid: "",
      uname: "",
      list: []
    };
  },
  created() {
    const userInfo = this.getUserInfo();
    if (userInfo != null) {
      this.uid = userInfo.id;
      this.uname = userInfo.name;
      this.sendUserId();
    } else {
      this.uid = "";
      this.uname = "";
    }

    this.getBlogList(); // 新增：在组件创建时获取BlogList
  },
  methods: {
    sendUserId() {
      this.$emit("sendUId", this.uid);
    },
    deleteBlogs(i) {
      this.$confirm("您将要删除该条博客,are u sure?", "提示", {
        confirmButtonText: "Sure",
        cancelButtonText: "Cancel",
        type: "warning"
      })
        .then(() => {
          this.list.splice(i, 1);
          this.$message({
            showClose: true,
            type: "success",
            center: true,
            message: "成功删除一条博客"
          });
        })
        .catch(() => {
          this.$message({
            showClose: true,
            type: "info",
            center: true,
            message: "取消删除"
          });
        });
    },
    editBlog(bid) {
      console.log(bid);
      // var bcontent = document.getElementById(bid);
      // console.log(bcontent);
    },

    getUserInfo() {
      const token = sessionStorage.getItem("user-token");
      if (token != null && token != "null") {
        // 解析token
        let decode = jwt.decode(token);
        return decode;
      } else {
        return null;
      }
    },
    getBlogList() {
      this.$axios.get("/api/blogList/" + this.uid).then(res => {
        if (res.status == 200) {
          this.list = res.data;
          console.log(this.list);
        } else {
          console.log(this.list);
          this.$message.error("获取博客信息失败 : (");
        }
      });
      err => {
        console.log(this.list);
        this.$message.error("获取博客列表失败！");
        console.log(err);
      };
    }
  }
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
.blogs {
  margin-top: 10px;
}
.blogs .el-card {
  float: left;
  width: 350px;
  height: 170px;
  overflow: scroll;
  margin-bottom: 5px;
  margin: 20px;
}
.time {
  font-size: 13px;
  color: #999;
}
</style>