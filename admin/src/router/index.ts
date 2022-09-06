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
      path: "/products",
      name: "product-detail",
      component: () => import("@/pages/product-detail/ProductDetail.vue"),
    },
  ],
});

export default router;
