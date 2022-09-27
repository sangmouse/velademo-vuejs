import { createRouter, createWebHistory } from "vue-router";
import {getJwtToken} from '../utils/helpers'

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
  ],
});
router.beforeEach((to, from, next) =>{
  const token = getJwtToken();
  if(!token && to.path !== '/login'){
    next({path: "/login"})
  } if(token && to.path === '/login'){
    next(from.path)
  }else{
    next()
  }
//   next()
  console.log(to);
  console.log(from);
  console.log(next);
})

export default router;
