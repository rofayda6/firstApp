/*eslint-disable */
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/app",
      name: "App",
      component: () => import("../views/Dashboard.vue"),
      children: [
        {
          path: "",
          name: "appmain",
          component: () => import("../components/MainDashboard.vue"),
        },
        {
          path: "clients",
          name: "clients",
          component: () => import("../views/ClientsMain.vue"),
          children: [
            {
              path: "",
              name: "clientList",
              component: () => import("../views/ClientList.vue"),
            },
            {
              path: "clientdetails/:id",
              name: "clientDetails",
              component: () => import("../views/ClientDetails.vue"),
            },
          ],
        },
        {
          path: "reports",
          name: "reports",
          component: () => import("../views/Reports.vue"),
        },
        {
          path: "tasks",
          name: "tasks",
          component: () => import("../views/TaskList.vue"),
        },
        {
          path: "visits",
          name: "visits",
          component: () => import("../views/VisitMain.vue"),
          children: [
            {
              path: "",
              name: "visitlist",
              component: () => import("../views/VisitList.vue"),
            },
            {
              path: "visitdetails/:id",
              name: "visitdetails",
              component: () => import("../views/VisitDetails.vue"),
            },
          ],
        },
        {
          path: "settings",
          name: "settings",
          component: () => import("../views/Settings.vue"),
        },
      ],
    },
  ],
});

export default router;
