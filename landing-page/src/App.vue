<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "./layout/header/Header.vue";
import Footer from "./layout/footer/Footer.vue";

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
  methods: {},
  updated() {},
  async created() {
    this.$watch(
      () => this.$route.path,
      async (value, _) => {
        await this.$store.dispatch("updateCartCurrent");
      }
    );
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
