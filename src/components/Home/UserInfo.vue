<template>
  <div>
    <transition enter-active-class="animated tada" leave-active-class="animated shake">
      <div class="userinfo" v-if="isShow">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <el-dropdown>
              <img src="../../../static/user/头像.png" alt />
              <span>臭弟弟</span>
              <i class="el-icon-close" @click="fade()"></i>
              <div id="nowtime"></div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>修改用户信息</el-dropdown-item>
                <router-link to="/">
                  <el-dropdown-item>注 销</el-dropdown-item>
                </router-link>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <i class="el-icon-position"></i>
          <span id="add">{{curAddress}}</span>
          <div class="decorate">
            <img src="../../../static/face/happyface.png" alt />
            <img src="../../../static/face/sleepface.png" alt />
            <img src="../../../static/face/sadface.png" alt />
            <img src="../../../static/face/happyface.png" alt />
            <img src="../../../static/face/sleepface.png" alt />
            <img src="../../../static/face/sadface.png" alt />
            <img src="../../../static/face/happyface.png" alt />
            <img src="../../../static/face/sleepface.png" alt />
          </div>
        </el-card>
      </div>
    </transition>
    <transition enter-active-class="animated jello" leave-active-class="animated bounceOutRight">
      <div class="closeinfo" v-if="!isShow" @click="fade()">
        <i class="el-icon-caret-left"></i>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true
    };
  },
  created() {
    this.getLocation();
    setInterval(() => {
      this.getNowTime();
    }, 1000);
  },
  computed: {
    curAddress() {
      return this.$store.getters.address;
    }
  },
  methods: {
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
      document.getElementById("nowtime").innerHTML =
        "当前时间：" +
        year +
        "年" +
        month +
        "月" +
        day +
        "日  " +
        h +
        ":" +
        m +
        ":" +
        s;
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
    },
    getLocation() {
      const self = this;
      AMap.plugin("AMap.Geolocation", function() {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000
        });

        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", onComplete);
        AMap.event.addListener(geolocation, "error", onError);

        function onComplete(data) {
          // data是具体的定位信息  精准定位
          console.log(data);
          console.log(data.formattedAddress);
          self.$store.dispatch("setLocation", data);
          self.$store.dispatch("setAddress", data.formattedAddress);
        }

        function onError(data) {
          // 定位出错    非精准定位
          console.log(data);
        }
      });
    },
    fade() {
      // document.getElementById("userinfo").style.visibility = hidden;
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style>
#add {
  font-size: 14px;
  color: rgb(65, 230, 153);
}
#nowtime {
  margin-top: 5px;
  font-size: 13px;
  font-family: STXihei, "华文细黑", "Microsoft YaHei", "微软雅黑";
}
.el-icon-close {
  position: relative;
  font-size: 20px;
  color: red;
  top: 10px;
  left: 60px;
  float: right;
}

.userinfo {
  position: fixed;
  right: 5px;
}
.userinfo .el-card {
  width: 300px;
  overflow: hidden;
}
.userinfo img {
  margin-left: 20px;
  vertical-align: middle;
  width: 40px;
  margin-right: 10px;
}
.userinfo .decorate img {
  /* 需要设置 position:relative 才可以使用动画 */
  position: relative;
  width: 20px;
  margin-left: 5px;
  margin-right: 0px;
  transition: 0.1s;
  animation: startmove 3s infinite;
  /* animation: endmove 3s infinite; */
}
@keyframes startmove {
  from {
    left: 0px;
  }
  50% {
    left: 50px;
  }
  to {
    left: 0px;
  }
}
.userinfo .decorate img:hover {
  width: 30px;
}
.closeinfo {
  position: fixed;
  right: 5px;
  width: 20px;
  height: 200px;
  background: white;
  border: 1px solid;
  border-color: lightgray;
}
.el-icon-caret-left {
  position: relative;
  top: 80px;
  font-size: 20px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>