import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
// import ProductDetailVue from "@/pages/ProductDetail.vue";

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
      component: () => import("../pages/Login.vue")
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
      path: "/product/id-123",
      name: "productdetail",
      component: () => import("../pages/ProductDetail.vue")
    },
    {
      path: "/search",
      name: "product",
      component: () => import("../pages/HomePage.vue")
    },
    // {
    //   path: "*",
    //   name: "not-found-page",
    //   component: () => import("../pages/HomePage.vue")
    // }
  ],
});

export default router;
