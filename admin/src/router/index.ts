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
      name: "product-detail",
      component: () => import("@/pages/product-detail/ProductDetail.vue"),
    },
    {
      path: "/my",
      name: "my",
      component: () => import("@/pages/my/my.vue"),
    },
    {
      path: "/addMy",
      name: "addMy",
      component: () => import("@/pages/my/addMy.vue"),
    },
  ],
});

export default router;
