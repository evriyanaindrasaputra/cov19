<template>
  <div class="chart">
    <div class="row my-5">
      <div class="col-md-6 offset-md-3 my-2">
        <VueApexCharts width="100%" type="bar" :options="options" :series="series"></VueApexCharts>
      </div>
    </div>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
export default {
  name: "Chart",
  components: {
    VueApexCharts
  },
  data() {
    return {
      options: {
        chart: {
          id: "vuechart-Covid19"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }
};
</script>