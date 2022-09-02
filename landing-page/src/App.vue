<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "./layout/header/Header.vue";
import Footer from "./layout/footer/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  created() {
    // if (localStorage.getItem("token") !== null) {
    //   this.$router.push({
    //     name: "home",
    //   });
    // } else {
    //   this.$router.push({
    //     name: "login",
    //   });
    // }
    this.$store.commit("CHECK_IS_LOGIN")
  },
};
</script>

<template>
  <Header
    v-if="
      [
        'home',
        'register',
        'products',
        'product',
        'search-product',
        'contact',
        'login',
      ].indexOf($route.name) > -1
    "
  />
  <RouterView />
  <Footer
    v-if="
      [
        'login',
        'home',
        'register',
        'products',
        'product',
        'search-product',
        'contact',
      ].indexOf($route.name) > -1
    "
  />
</template>
