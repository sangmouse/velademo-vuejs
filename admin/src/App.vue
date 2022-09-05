<template>
  <div style="height: 100px" />
  <Header />
  <RouterView />
  <Footer />
</template>

<script lang="ts">
import Header from "./layouts/header/Header.vue";
import Footer from "./layouts/footer/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
