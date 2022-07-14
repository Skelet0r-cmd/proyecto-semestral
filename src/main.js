import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
// eslint-disable-next-line no-unused-vars
import BootstrapVue from "../node_modules/bootstrap";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
// eslint-disable-next-line no-unused-vars
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import line from "vue-chartjs";

// eslint-disable-next-line no-unused-vars
import moment from "vue-moment";

import router from "./router";
createApp(App).use(router).use(store).mount("#app");
