<template>
  <!--<LoginComponent></LoginComponent>-->
  <!--<SessionHistoryComponent></SessionHistoryComponent>-->
  <div id="app">
    <PlanetChart />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import LoginComponent from "./components/LoginComponent.vue";
// eslint-disable-next-line no-unused-vars
import SessionHistoryComponent from "./components/SessionHistoryComponent.vue";
import PlanetChart from "./components/PlanetChart.vue";
export default {
  name: "App",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    //LoginComponent,
    //SessionHistoryComponent,
    PlanetChart,
  },
};
</script>

<style></style>
