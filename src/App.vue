<template>
  <!-- <LoginComponent></LoginComponent>-->
  <!--<SessionComponent></SessionComponent>-->
  <YielChartComponent></YielChartComponent>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import LoginComponent from "./components/LoginComponent.vue";
// eslint-disable-next-line no-unused-vars
import SessionHistoryComponent from "./components/SessionHistoryComponent.vue";
import YielChartComponent from "./components/YielChartComponent.vue";

export default {
  name: "App",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    //LoginComponent,
    //SessionComponent,
    YielChartComponent,
  },
};
</script>

<style></style>
