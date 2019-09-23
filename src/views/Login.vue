<template>
  <div>
    <img class="back" src="../../static/back/loginBack1.jpg" alt />
    <span id="blogTitle">Elsnake's Blog</span>
    <div class="midContainer">
      <em style="float:right">密码登录</em>

      <el-input v-model="uId" placeholder="账号或者手机号"></el-input>
      <el-input v-model="uPasswd" placeholder="密码" show-password></el-input>

      <el-button type="text" style="float:right;">忘记密码?</el-button>
      <div class="imgList" v-for="(face,index) in faceList " :key="index">
        <img :src="face" alt />
      </div>
      <el-button class="loginBtn" type="primary" @click="login()">注册/登录</el-button>
      <div class="bottomContainer">
        <p>
          未注册手机验证后自动登录
          注册即代表同意《协议》《隐私保护指引》
        </p>
      </div>
    </div>

    <div class="footer">
      <div class="footerInfo">
        <span>Github: xieweikang666</span>
        <span>隐私声明和Cookie</span>
        <span>法律声明</span>
        <span>帮助</span>
        <span>反馈</span>
      </div>
      <div class="copyright">
        <span>@2019 copyright</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: "",
      loading: "",
      logLoading: "",
      uId: "",
      uPasswd: "",
      faceList: [
        "../../static/face/face1.png",
        "../../static/face/face2.png",
        "../../static/face/face3.png",
        "../../static/face/face1.png",
        "../../static/face/face2.png",
        "../../static/face/face3.png",
        "../../static/face/face1.png",
        "../../static/face/face2.png",
        "../../static/face/face3.png"
      ]
    };
  },
  created() {
    this.blogLoading();
  },
  mounted() {
    this.loading.close();
  },
  methods: {
    // 登录方法
    login() {
      let obj = {
        userId: this.uId,
        userPasswd: this.uPasswd
      };
      console.log(obj);
      this.$axios.post("/auth/user", obj).then(
        res => {
          console.log(res);
          if (res.data.success) {
            sessionStorage.setItem("user-token", res.data.token);
            this.$message({
              type: "success",
              message: "登录成功!",
              center: true,
              showClose: true
            });
            this.loginLoading();
          } else {
            this.$message({
              type: "warning",
              // 登录失败，显示提示语
              message: res.data.info,
              center: true,
              showClose: true
            });
            sessionStorage.setItem("user-token", null);
          }
        },
        err => {
          console.log(err);
          this.$message.error("请求错误:(");
          sessionStorage.setItem("user-token", null);
        }
      );
    },

    // 加载页面
    blogLoading() {
      console.log("loading函数执行！");
      this.loading = this.$loading({
        lock: true,
        text: "正在飞速加载中~",
        background: "rgba(255,255,255,1)"
      });
    },
    loginLoading() {
      console.log("用户正在登录！");
      this.logLoading = this.$loading({
        lock: true,
        text: "正在登录...",
        background: "rgba(255,255,255,1)"
      });
      setTimeout(() => {
        this.logLoading.close();
        this.$router.push("/HomePage"); //把路由跳转放到loading函数中
      }, 1000);
    }
  }
};
</script>

<style>
html {
  font-size: 15px;
}
.back {
  position: absolute;
  z-index: -1;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
#blogTitle {
  display: block;
  color: white;
  font-size: 30px;
  position: absolute;
  left: 43%;
  top: 10%;
  font: small-caps bold 24px/1 sans-serif;
}
.midContainer {
  margin-left: 38%;
  margin-top: 10%;
  width: 26rem;
  height: 27rem;
  background: white;
  border-radius: 5px;
  box-shadow: black 5px 5px 30px 5px;
}
.midContainer input {
  display: block;
  width: 70%;
  height: 40px;
  margin-left: 15%;
  margin-top: 5px;
  outline: 0;
  border: 0;
  border-radius: 0;
  border-bottom: 1px solid lightgray;
  text-decoration: none;
  font-size: 15px;
  color: lightsteelblue;
}
.midContainer .bottomContainer {
  position: relative;
  top: 210px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background: lightgrey;
}
.midContainer .bottomContainer p {
  color: gray;
  padding-left: 10px;
  padding-top: 5px;
}
.midContainer .bottomContainer p:hover {
  color: white;
}
/* .midContainer input::input-placeholder {
  color: steelblue;
} */
.imgList img {
  position: relative;
  left: 50px;
  top: 150px;
  margin-left: 5px;
  width: 25px;
  float: left;
  transition: 0.5s;
}
.imgList img:hover {
  width: 50px;
}
.footer {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 30px;
}
.footerInfo {
  margin-left: 20px;
  width: 500px;
  display: flex;
  justify-content: space-between;
  color: gainsboro;
}
.footerInfo :hover {
  color: white;
}
.copyright {
  color: gray;
  position: fixed;
  bottom: 0px;
  right: 0px;
  float: right;
  width: 150px;
  height: 30px;
}
.loginBtn {
  position: relative;
  width: 70%;
  height: 30px;
  top: 200px;
  left: 55px;
  line-height: 7px;
}
</style>