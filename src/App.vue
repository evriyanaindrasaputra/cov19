<template>
  <div id="app" class="container">
    <Card />
    <Chart />
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import Chart from "./components/Chart.vue";

export default {
  name: "App",
  components: {
    Card,
    Chart
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
