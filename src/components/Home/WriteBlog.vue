<template>
  <div class="writeBlog">
    <el-card shadow="hover">
      <span>记录今天的想法？</span>
      <br />
      <el-input class="btitle" prefix-icon="el-icon-menu" v-model="btitle" placeholder="标题"></el-input>
      <el-input
        class="bcontent"
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="bcontent"
        maxlength="150"
      ></el-input>
      <el-button type="success" size="small" style="float:right;">添加</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btitle: "",
      bcontent: ""
    };
  }
};
</script>

<style>
.writeBlog {
  width: 350px;
}

.writeBlog .btitle {
  width: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.writeBlog .bcontent {
  margin-bottom: 5px;
}
.writeBlog button{
    margin-bottom: 5px;
}
</style>