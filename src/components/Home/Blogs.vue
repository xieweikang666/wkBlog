<template>
  <div class="blogs">
    <el-card v-for="(userBlogs,index) in userBlogs" :key="index">
      <div slot="header">
        <i class="el-icon-edit"></i>
        <em>{{userBlogs.bTitle}}</em>
        <el-button style="float: right; padding: 3px 0;color:green;" type="text">修改</el-button>
      </div>
      <span>{{userBlogs.bContent}}</span>
      <br />
      <time class="time">{{ userBlogs.bTime }}</time>
      <el-button style="float: right; padding: 1px 0;color:gray;" type="text">删除</el-button>
    </el-card>
  </div>
</template>

<script>
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
          bId: "1",
          bTitle: "今天的感想",
          bContent: "Never forget to say “thanks”.　永远不要忘了说“谢谢”!",
          bTime: Date()
        },
        {
          bId: "1",
          bTitle: "今天的感想",
          bContent: "Never forget to say “thanks”.　永远不要忘了说“谢谢”!",
          bTime: Date()
        },
        {
          bId: "1",
          bTitle: "今天的感想",
          bContent: "Never forget to say “thanks”.　永远不要忘了说“谢谢”!",
          bTime: Date()
        },
        {
          bId: "1",
          bTitle: "今天的感想",
          bContent: "Never forget to say “thanks”.　永远不要忘了说“谢谢”!",
          bTime: Date()
        },
        {
          bId: "1",
          bTitle: "今天的感想",
          bContent: "Never forget to say “thanks”.　永远不要忘了说“谢谢”!",
          bTime: Date()
        },
        {
          bId: "1",
          bTitle: "今天的感想",
          bContent: "Never forget to say “thanks”.　永远不要忘了说“谢谢”!",
          bTime: Date()
        },
        {
          bId: "1",
          bTitle: "今天的感想",
          bContent: "Never forget to say “thanks”.　永远不要忘了说“谢谢”!",
          bTime: Date()
        }
      ]
    };
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