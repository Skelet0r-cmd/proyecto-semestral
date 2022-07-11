<!-- eslint-disable prettier/prettier -->
<template>
  <NavbarTop />
  <div>
    <canvas id="planet-chart"></canvas>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js";
import planetChartData from "../planet-data.js";
import NavbarTop from "./NavbarTop.vue";
export default {
  name: "PlanetChart",
  data() {
    return {
      planetChartData: planetChartData,
    };
  },
  components: {
    NavbarTop,
  },
  mounted() {
    const ctx = document.getElementById("planet-chart");
    new Chart(ctx, this.planetChartData);
  },
};
</script>
