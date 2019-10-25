<template>
  <div>
    <h2>当前位置</h2>
    <div class="testNextTick">
      <div ref="msgDiv">{{msg}}</div>
      <div v-if="msg1">Message got outside $nextTick: {{msg1}}</div>
      <div v-if="msg2">Message got outside $nextTick: {{msg2}}</div>
      <div v-if="msg3">Message got outside $nextTick: {{msg3}}</div>
      <el-button type="primary" @click="changeMsg()">changeMsg</el-button>
    </div>
    <div id="mapChart"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello vue",
      msg1: "",
      msg2: "",
      msg3: ""
    };
  },
  mounted() {
    this.drawCharts();
  },
  methods: {
    changeMsg() {
      this.msg = "hello xwk";
      this.msg1 = this.$refs.msgDiv.innerHTML;
      this.$nextTick(() => {
        this.msg2 = this.$refs.msgDiv.innerHTML;
      });
      this.msg3 = this.$refs.msgDiv.innerHTML;
    },
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
    }
  }
};
</script>

<style>
#mapChart {
  width: 200px;
  height: 200px;
}
</style>