<template>
  <div class="writeBlog">
    <el-card shadow="hover">
      <span>记录今天的想法？</span>
      <br />
      <el-input class="blog-title" prefix-icon="el-icon-menu" v-model="btitle" placeholder="标题"></el-input>
      <br />
      <el-input
        class="blog-content"
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="bcontent"
        maxlength="150"
      ></el-input>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePicCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus" title="上传图片"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImgUrl" alt="无法显示该图片" />
      </el-dialog>
      <el-button type="success" size="small" style="float:right;" @click="addBlog()">添加</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    uid: String
  },
  data() {
    return {
      // 需要解决该问题 blog的id应该自增
      // bid: 6,
      btitle: "",
      bcontent: "",
      btime: "",
      dialogImgUrl: "",
      dialogVisible: false
    };
  },
  mounted() {
    setTimeout(() => {
      console.log("writeblog获取到来自父组件homepage传递过来的uid:" + this.uid);
    }, 0);
  },
  methods: {
    addBlog() {
      if (this.bcontent == "") {
        return;
      } else {
        this.btime = this.getNowTime();
        let obj = {
          // id: "",
          uid: this.uid,
          title: this.btitle,
          content: this.bcontent,
          time: this.btime
        };
        this.$axios.post("/api/blogList", obj).then(res => {
          if ((res.status = 200)) {
            //如果返回200 则说明创建成功
            this.$message({
              type: "success",
              message: "创建成功 : ) "
            });
          } else {
            this.$message.error("创建失败!");
          }
        }),
          err => {
            this.$message.error("创建失败 :( ");
            console.log(err);
          };
      }
      this.btitle = ""; //把blog标题清空
      this.bcontent = ""; //将blog内容清空
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePicCardPreview(file) {
      this.dialogImgUrl = file.url;
      this.dialogVisible = true;
    },
    getNowTime() {
      var time = new Date();
      var year = time.getFullYear();
      var month = time.getMonth();
      var day = time.getDate();
      var h = time.getHours();
      var m = time.getMinutes();
      var s = time.getSeconds();
      h = this.check(h);
      m = this.check(m);
      s = this.check(s);
      var nowTime =
        year + "年" + month + "月" + day + "日  " + h + ":" + m + ":" + s;
      return nowTime;
    },
    check(i) {
      //方法一，用三元运算符
      var num;
      i < 10 ? (num = "0" + i) : (num = i);
      return num;
      //方法二，if语句判断
      //if(i<10){
      //    i="0"+i;
      //}
      //return i;
    }
  }
};
</script>

<style>
.writeBlog {
  width: 500px;
  border-radius: 20px;
  border: 1px solid rgb(75, 223, 30);
}
.writeBlog .blog-title {
  width: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.writeBlog .blog-content {
  width: 400px;
  margin-bottom: 5px;
}
.writeBlog button {
  margin-bottom: 5px;
}
.el-upload {
  width: 60px;
  height: 60px;
}
.el-upload .el-icon-plus {
  display: block;
  margin-top: 30%;
}
</style>