<template>
  <div class="footerDress">
    <img src="../../../static/face/happyface.png" alt />
    <img src="../../../static/face/sleepface.png" alt />
    <img src="../../../static/face/sadface.png" alt />
    <img src="../../../static/face/happyface.png" alt />
    <img src="../../../static/face/sleepface.png" alt />
    <img src="../../../static/face/sadface.png" alt />
    <img src="../../../static/face/happyface.png" alt />
    <img src="../../../static/face/sleepface.png" alt />
    <img src="../../../static/face/happyface.png" alt />
    <img src="../../../static/face/sleepface.png" alt />
    <img src="../../../static/face/sadface.png" alt />
    <img src="../../../static/face/happyface.png" alt />
    <img src="../../../static/face/sleepface.png" alt />
    <img src="../../../static/face/sadface.png" alt />
    <img src="../../../static/face/happyface.png" alt />
    <img src="../../../static/face/sleepface.png" alt />
    <img src="../../../static/face/happyface.png" alt />
    <img src="../../../static/face/sleepface.png" alt />
    <img src="../../../static/face/sadface.png" alt />
    <img src="../../../static/face/happyface.png" alt />
    <img src="../../../static/face/sleepface.png" alt />
    <img src="../../../static/face/sadface.png" alt />
    <img src="../../../static/face/happyface.png" alt />
    <img src="../../../static/face/sleepface.png" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.footerDress {
  margin-left: 20%;
  margin-top: 20px;
}
.footerDress img {
  position: relative;
  width: 20px;
  margin-left: 5px;
  margin-right: 0px;
  transition: 0.1s;
  animation: bottommove 10s infinite;
}
.footerDress img:hover {
  width: 30px;
}
@keyframes bottommove {
  from {
    left: 0px;
  }
  50% {
    left: 200px;
  }
  to {
    left: 0px;
  }
}
</style>