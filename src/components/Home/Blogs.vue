<template>
  <div class="blogs">
    <transition-group
      enter-active-class="animated bounceInDown"
      leave-active-class="animated wobble"
    >
      <!-- 因为在transition-group子元素上，不能使用v-for索引作为键，否则与不使用键相同，所以：key值绑定的不能是index，得要换成userBlogs -->
      <el-card v-for="(userBlogs,index) in userBlogs" :key="userBlogs">
        <div slot="header">
          <i class="el-icon-edit"></i>
          <strong>{{userBlogs.bId}}</strong>
          <em>{{userBlogs.bTitle}}</em>
          <el-button style="float: right; padding: 3px 0;color:green;" type="text">修改</el-button>
        </div>
        <span>{{userBlogs.bContent}}</span>
        <br />
        <time class="time">{{ userBlogs.bTime }}</time>
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
import { type } from "os";
export default {
  data() {
    return {
      userBlogs: [
        {
          bId: "1",
          bTitle: "今天的感想",
          bContent: "Never forget to say “thanks”.　永远不要忘了说“谢谢”!",
          bTime: Date()
        },
        {
          bId: "2",
          bTitle: "今天的感想",
          bContent: "Never forget to say “thanks”.　永远不要忘了说“谢谢”!",
          bTime: Date()
        },
        {
          bId: "3",
          bTitle: "今天的感想",
          bContent: "Never forget to say “thanks”.　永远不要忘了说“谢谢”!",
          bTime: Date()
        },
        {
          bId: "4",
          bTitle: "今天的感想",
          bContent: "Never forget to say “thanks”.　永远不要忘了说“谢谢”!",
          bTime: Date()
        },
        {
          bId: "5",
          bTitle: "今天的感想",
          bContent: "Never forget to say “thanks”.　永远不要忘了说“谢谢”!",
          bTime: Date()
        },
        {
          bId: "6",
          bTitle: "今天的感想",
          bContent: "Never forget to say “thanks”.　永远不要忘了说“谢谢”!",
          bTime: Date()
        },
        {
          bId: "7",
          bTitle: "今天的感想",
          bContent: "Never forget to say “thanks”.　永远不要忘了说“谢谢”!",
          bTime: Date()
        },
        {
          bId: "8",
          bTitle: "今天的感想",
          bContent: "Never forget to say “thanks”.　永远不要忘了说“谢谢”!",
          bTime: Date()
        }
      ]
    };
  },
  methods: {
    deleteBlogs(i) {
      this.$confirm("您将要删除该条博客,are u sure?", "提示", {
        confirmButtonText: "Sure",
        cancelButtonText: "Cancel",
        type: "warning"
      })
        .then(() => {
          this.userBlogs.splice(i, 1);
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
    }
  }
};
</script>

<style>
.blogs {
  margin-top: 10px;
}
.blogs .el-card {
  float: left;
  width: 20%;
  margin-bottom: 5px;
  margin: 20px;
}
.time {
  font-size: 13px;
  color: #999;
}
</style>