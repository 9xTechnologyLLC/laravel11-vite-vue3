import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("./Application/Pages/HomePage.vue"),
    },
    {
        path: "/about",
        name: "About",
        component: () => import("./Application/Pages/AboutPage.vue"),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});