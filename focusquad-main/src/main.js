import { createApp } from "vue";
import { createPinia } from "pinia";
import store from "./stores/store";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
app.use(store);
app.use(createPinia());
app.use(router);


app.mount("#app");
