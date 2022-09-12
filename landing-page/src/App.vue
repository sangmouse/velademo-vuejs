<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "./layout/header/Header.vue";
import Footer from "./layout/footer/Footer.vue";
import { setJwtToken } from "@/utils/helpers";

export default {
  data() {
    return {
      isLogout: this.$store.state.auth.isLogin,
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    syncLogout(event) {
      if (event.key === "logout") {
        setJwtToken("");
        this.$store.commit("CHECK_IS_LOGIN");
      }
    },
  },
  updated() {
    window.addEventListener("storage", this.syncLogout);
  },
  async created() {
    await this.$store.dispatch("updateCartCurrent");
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