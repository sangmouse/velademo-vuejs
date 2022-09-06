import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home-page",
      component: () => import("@/pages/HomePage.vue"),
    },
    {
      path: "/login",
      name: "login-page",
      component: () => import("@/pages/login/LoginPage.vue"),
    },
    {
      path: "/add-product",
      name: "add-product",
      component: () => import("@/pages/products/add-product/AddProduct.vue"),
    },
    {
      path: "/product/:id",
      name: "view-product",
      component: () => import("@/pages/products/view-product/ViewProduct.vue"),
    },
  ],
});

export default router;
