import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
// eslint-disable-next-line no-unused-vars
import axios from "axios";

createApp(App).use(store).mount("#app");
