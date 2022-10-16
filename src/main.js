import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "../static_site/style.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
