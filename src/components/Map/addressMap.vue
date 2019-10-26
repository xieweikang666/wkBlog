<template>
  <div class="addressMap">
    <h2>当前位置</h2>
    <div id="Address"></div>
    <div id="mapChart"></div>
  </div>
</template>

<script>
import { nextTick } from "q";
export default {
  data() {
    return {};
  },

  mounted() {
    this.drawCharts();
    this.drawMap();
  },

  methods: {
    drawCharts() {
      let mapChart = this.$echarts.init(document.getElementById("mapChart"));
      mapChart.setOption({
        title: {
          text: "vue里面使用echarts"
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 22]
          }
        ]
      });
    },
    drawMap() {
      var addMap = new AMap.Map("Address", {
        resizeEnable: true
      });
      AMap.plugin("AMap.Geolocation", function() {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: "RB"
        });
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", onComplete);
        AMap.event.addListener(geolocation, "error", onError);
        addMap.addControl(geolocation); //把geolocation里的属性挂载到地图addMap上
        function onComplete(data) {
          console.log("定位成功：" + data);
          // data是具体的定位信息
        }

        function onError(data) {
          console.log("定位失败：" + data);
          // 定位出错
        }
      });
    }
  }
};
</script>

<style scoped>
.addressMap {
  width: 100%;
  height: 100%;
  background: rgb(241, 241, 241);
}
#mapChart {
  margin-left: 50px;
  width: 200px;
  height: 200px;
}
#Address {
  margin-left: 50px;
  width: 500px;
  height: 500px;
}
</style>