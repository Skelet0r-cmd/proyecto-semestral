import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
// eslint-disable-next-line no-unused-vars
import BootstrapVue from "../node_modules/bootstrap";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
// eslint-disable-next-line no-unused-vars
import axios from "axios";
createApp(App).use(store).mount("#app");
