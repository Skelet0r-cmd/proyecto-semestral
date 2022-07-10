import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";

createApp.prototype.$hhtp = axios;

createApp(App).use(store).mount("#app");
