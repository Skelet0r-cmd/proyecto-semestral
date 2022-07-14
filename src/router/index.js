import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: LoginView,
  },
  {
    path: "/SessionHistoryView",
    name: "SessionHistoryView",
    component: () => import("../views/SessionHistoryView.vue"),
  },
  {
    path: "/PlanetChartView",
    name: "PlanetChartView",
    component: () => import("../views/PlanetChartView.vue"),
  },
  {
    path: "/LogOutView",
    name: "LogOutView",
    component: () => import("../views/LogOutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
