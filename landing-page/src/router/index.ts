import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/account/login",
      name: "login",
      component: HomePage,
    },
    {
      path: "/account/register",
      name: "register",
      component: HomePage,
    },
    {
      path: "/products",
      name: "products",
      component: HomePage,
    },
    {
      path: "/product/:id",
      name: "product",
      component: () => import("../pages/HomePage.vue")
    },
    {
      path: "/search",
      name: "product",
      component: () => import("../pages/HomePage.vue")
    },
    {
      path:"/contact",
      name: "contact",
      component: () => import("../pages/contact-page/ContactUsPage.vue")
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found-page",
      component: () => import("../pages/not-found-page/NotFoundPage.vue")
    }
  ],
});

export default router;
