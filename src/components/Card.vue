<template>
  <div class="row">
    <div class="d-flex justify-content-between col-md-6 border offset-md-3">
      <div class="p-1 mx-auto my-3">
        <div class="infected">
          <h3>Infected</h3>
          <!-- <p>{{dataCov}}</p> -->
          <div class="iCountUp">
            <ICountUp :delay="delay" :endVal="dataCov.confirmed.value" :options="options" />
          </div>
          <p>{{new Date(dataCov.lastUpdate).toDateString()}}</p>
        </div>
      </div>
      <div class="p-1 mx-auto my-3">
        <div class="recovered">
          <h3>recovered</h3>
          <!-- <p>{{dataCov.recovered}}</p> -->
          <div class="iCountUp">
            <ICountUp :delay="delay" :endVal="dataCov.recovered.value" :options="options" />
          </div>
          <p>{{new Date(dataCov.lastUpdate).toDateString()}}</p>
        </div>
      </div>
      <div class="p-1 mx-auto my-3">
        <div class="death">
          <h3>death</h3>
          <!-- <p>{{dataCov.deaths}}</p> -->
          <div class="iCountUp">
            <ICountUp :delay="delay" :endVal="dataCov.deaths.value" :options="options" />
          </div>
          <p>{{new Date(dataCov.lastUpdate).toDateString()}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
import ICountUp from "vue-countup-v2";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Card",
  components: {
    ICountUp
  },
  data() {
    return {
      confirmed: "",
      recovered: "",
      deaths: "",
      delay: 1000,
      endVal: 11641640,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: ""
      }
    };
  },
  methods: {
    ...mapActions(["getDataCovid"])
  },
  mounted() {
    this.getDataCovid();
  },
  computed: {
    ...mapGetters(["dataCov"])
  }
};
</script>