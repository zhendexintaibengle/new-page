<template>
  <div class="dashboard">
    <div class='list'>
      <DataCard v-for='items in data' :key="items.text"  :msg="items.text" :data='items.value' :path="items.path" />
    </div>
    <div class="chartsdom">
      <DataCharts title='Worldwide Sales' id='echarts' width="100%" height="320px" :data='echartsData' />
      <DataCharts title='Worldwide Sales' id='echarts2' width="100%" height="320px" :data='echartsData' />
    </div>
  </div>
</template>

<script>
import DataCard from "./DataCard.vue";
import DataCharts from "./DataCharts.vue";
export default {
  name: "DashboardComponent",
  components: {
    DataCard,
    DataCharts
  },
  data() {
    return {
      data: [
        { text: "Today Sale", value: 1234, path: "line" },
        { text: "Total Sale", value: 1234, path: "zhu" },
        { text: "Today Revenue", value: 1234, path: "total" },
        { text: "Total Revenue", value: 1234, path: "bean" }
      ],
      echartsData: {
        xdata: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        ydata: [120, 200, 150, 80, 70, 110, 130]
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard {
  margin: 20px;
}
.dashboard .list {
  display: flex;
  justify-content: space-between;
}
.dashboard .datacard:last-child {
  margin-right: 0;
}
.dashboard .chartsdom{
  display: flex;
  padding-top: 20px;
  width: 100%;
}
.dashboard .chartsdom .datacharts:last-child{
  margin-right: 0;
}
</style>
