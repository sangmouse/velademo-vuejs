<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "./layout/header/Header.vue";
import Footer from "./layout/footer/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <Header
    v-if="
      [
        'home',
        'login',
        'register',
        'products',
        'product',
        'search-product',
        'contact',
      ].indexOf($route.name) > -1
    "
  />
  <RouterView />
  <Footer
    v-if="
      [
        'home',
        'login',
        'register',
        'products',
        'product',
        'search-product',
        'contact',
      ].indexOf($route.name) > -1
    "
  />
</template>
