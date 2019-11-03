<template>
  <div class="addressMap">
    <router-link to="/HomePage">返回首页</router-link>
    <div class="currentPosition">
      <span>当前位置</span>
      <br />
      <span>current position</span>
      <div id="Address"></div>
    </div>

    <div id="mapChart1"></div>
    <div id="mapChart2"></div>
  </div>
</template>

<script>
import "echarts/theme/macarons.js";
import { nextTick } from "q";
export default {
  data() {
    return {};
  },
  created() {
    var bd = document.body;
    bd.style.margin = "0px";
  },
  mounted() {
    this.drawChart1();
    this.drawChart2();
    this.drawMap();
  },

  methods: {
    drawChart1() {
      let mapChart = this.$echarts.init(
        document.getElementById("mapChart1"),
        "macarons"
      );
      mapChart.setOption({
        title: {
          text: "weather",
          subtext: "test chart"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["最高气温", "最低气温"]
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} °C"
          }
        },
        series: [
          {
            name: "最高气温",
            type: "line",
            data: [11, 11, 15, 13, 12, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },
          {
            name: "最低气温",
            type: "line",
            data: [1, -2, 2, 5, 3, 2, 0],
            markPoint: {
              data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
            },
            markLine: {
              data: [
                { type: "average", name: "平均值" },
                [
                  {
                    symbol: "none",
                    x: "90%",
                    yAxis: "max"
                  },
                  {
                    symbol: "circle",
                    label: {
                      normal: {
                        position: "start",
                        formatter: "最大值"
                      }
                    },
                    type: "max",
                    name: "最高点"
                  }
                ]
              ]
            }
          }
        ]
      });
    },
    drawChart2() {
      var option = {
        legend: {},
        tooltip: {
          trigger: "axis",
          showContent: false
        },
        dataset: {
          source: [
            ["product", "2012", "2013", "2014", "2015", "2016", "2017"],
            ["Matcha Latte", 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
            ["Milk Tea", 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
            ["Cheese Cocoa", 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
            ["Walnut Brownie", 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
          ]
        },
        xAxis: { type: "category" },
        yAxis: { gridIndex: 0 },
        grid: { top: "55%" },
        series: [
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          {
            type: "pie",
            id: "pie",
            radius: "30%",
            center: ["50%", "25%"],
            label: {
              formatter: "{b}: {@2012} ({d}%)"
            },
            encode: {
              itemName: "product",
              value: "2012",
              tooltip: "2012"
            }
          }
        ]
      };
      let chart2 = this.$echarts.init(
        document.getElementById("mapChart2"),
        "macarons"
      );
      chart2.setOption(option);
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
  /* 子绝父相 */
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
}
.currentPosition {
  margin-left: 50px;
  margin-top: 50px;
  text-align: center;
  width: 300px;
  height: 300px;
  margin-bottom: 150px;
}
.currentPosition span {
  color: rgb(100, 95, 95);
  font: small-caps bold 24px/1 sans-serif;
}
#Address {
  box-sizing: border-box;
  width: 450px;
  height: 450px;
  border: 5px solid beige;
  border-radius: 20px;
  box-shadow: 10px 10px 10px #e4efe9;
}
#mapChart1 {
  position: absolute;
  right: 50px;
  top: 250px;
  width: 450px;
  height: 450px;
}
#mapChart2 {
  position: absolute;
  right: 550px;
  top: 250px;
  width: 400px;
  height: 400px;
}
</style>