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
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Chart",
  components: {
    VueApexCharts
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getDataCovid"])
  },
  mounted() {
    this.getDataCovid();
  },
  computed: {
    ...mapGetters(["dataCov"]),
    options() {
      return {
        chart: {
          id: "vuechart-Covid19"
        },
        xaxis: {
          categories: ["Confirmed", "recovered", "deaths"]
        }
      };
    },
    series() {
      return [
        {
          name: "data-covid19",
          data: [
            this.dataCov.confirmed.value,
            this.dataCov.recovered.value,
            this.dataCov.deaths.value
          ]
        }
      ];
    }
  }
};
</script>
