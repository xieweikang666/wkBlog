<template>
  <div>
    <img class="back" src="../../static/back/loginBack1.jpg" alt />
    <div class="midContainer">
      <h4>密码登录</h4>
      <el-input v-model="num" placeholder="账号或者手机号"></el-input>
      <el-input v-model="num" placeholder="密码" show-password></el-input>

      <!-- <input type="text" placeholder="账号或者手机号" />
      <input type="password" placeholder="密码" />-->
      <el-button type="text" style="float:right;">忘记密码?</el-button>
      <div class="imgList" v-for="(face,index) in faceList " :key="index">
        <img :src="face" alt />
      </div>
      <el-button class="loginBtn" type="primary">注册/登录</el-button>
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
.midContainer {
  margin-left: 35%;
  margin-top: 10%;
  width: 25rem;
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