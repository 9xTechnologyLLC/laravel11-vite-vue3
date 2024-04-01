import "./bootstrap";
import router from "./router";
import { createApp } from "vue";

import App from "./Application/App.vue";

import { createHead } from '@vueuse/head'
const head = createHead()


createApp(App).use(head).use(router).mount("#app");