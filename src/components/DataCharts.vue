<template>
  <div class="datacharts">
    <div class='title-info'>
       {{title}}
    </div>
    <div class='right-data'>
         <div :id="id" :style="{height:height,width:width}" />
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme

export default {
  name: "DataCharts",
  props: {
    data: Object,
    title: String,
    id: String,
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "300px"
    }
  },
  mounted() {
    var chartDom = document.getElementById(this.id);
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      xAxis: {
        type: "category",
        data: this.data.xdata
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: this.data.ydata,
          type: "bar"
        }
      ]
    };

    option && myChart.setOption(option);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.datacharts {
  font-weight: 700;
  color: #fff;
  background: #191C24;
  margin-right: 20px;
  width: 100%;
  flex-shrink: 1;
}
.title-info{
    padding: 20px 0 0 20px;
}
</style>
