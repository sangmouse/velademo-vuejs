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
  <Header />
  <RouterView />
  <Footer />
</template>