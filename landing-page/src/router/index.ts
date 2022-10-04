import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import { getJwtToken, getCheckoutLogin } from "../utils/helpers"

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
      component: () => import("../pages/login-page/LoginPage.vue"),
    },
    {
      path: "/account/register",
      name: "register",
      component: () => import("../pages/login-page/LoginPage.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: HomePage,
    },
    {
      path: "/product/:id",
      name: "product",
      component: () => import("../pages/product-detail/ProductDetail.vue"),
    },
    {
      path: "/search",
      name: "search-product",
      component: () => import("../pages/search-product/SearchProduct.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found-page",
      component: () => import("../pages/not-found-page/NotFoundPage.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../pages/contact-page/ContactUsPage.vue"),
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("../pages/checkout/Checkout.vue"),
    },
  ],
});
router.beforeEach((to, from, next) => {
  const token = getJwtToken();
  const checkout = getCheckoutLogin()
  if (token && to.path === '/account/login') {
    if (checkout === 'true' && from.path === '/checkout') {
      next({ path: "/checkout" })
    } else if(checkout !== 'true' && from.path !== '/checkout') {
      next({ path: "/" })
    }
  } else {
    next()
  }
})

export default router;
