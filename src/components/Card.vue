<template>
  <div class="container">
    <div class="row">
      <div class="d-flex justify-content-between col-md-6 border offset-md-3">
        <div class="p-1 mx-auto my-3">
          <div class="infected">
            <h3>Infected</h3>
            <!-- <p>{{dataCov}}</p> -->
            <div class="iCountUp">
              <ICountUp :delay="delay" :endVal="dataCov.confirmed" :options="options" />
            </div>
            <p>date</p>
          </div>
        </div>
        <div class="p-1 mx-auto my-3">
          <div class="recovered">
            <h3>recovered</h3>
            <!-- <p>{{dataCov.recovered}}</p> -->
            <div class="iCountUp">
              <ICountUp :delay="delay" :endVal="endVal" :options="options" />
            </div>
            <p>date</p>
          </div>
        </div>
        <div class="p-1 mx-auto my-3">
          <div class="death">
            <h3>death</h3>
            <!-- <p>{{dataCov.deaths}}</p> -->
            <div class="iCountUp">
              <ICountUp :delay="delay" :endVal="endVal" :options="options" />
            </div>
            <p>date</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ICountUp from "vue-countup-v2";

export default {
  name: "Card",
  components: {
    ICountUp
  },
  data() {
    return {
      delay: 1000,
      endVal: 11641640,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: ""
      },
      dataCov: [
        {
          confirmed: "",
          recovered: "",
          deaths: ""
        }
      ]
    };
  },
  methods: {
    async fetchData() {
      await axios.get("https://covid19.mathdro.id/api").then(response => {
        this.dataCov.confirmed = response.data.confirmed.value;
        this.dataCov.recovered = response.data.recovered.value;
        this.dataCov.deaths = response.data.deaths.value;
        console.log(response.data);
      });
    }
    // onReady(instance, CountUp) {
    //     instance.update(this.endVal + 100);
  },
  mounted() {
    this.fetchData();
  }
};
</script>