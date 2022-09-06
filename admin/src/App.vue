<template>
  <div
    style="height: 100px"
    v-if="['home-page', 'add-product'].indexOf($route.name) > -1"
  />
  <Header v-if="['home-page', 'add-product'].indexOf($route.name) > -1" />
  <RouterView />
  <Footer v-if="['home-page', 'add-product'].indexOf($route.name) > -1" />
</template>

<script lang="ts">
import Header from "./layouts/header/Header.vue";
import Footer from "./layouts/footer/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  created() {
    if (localStorage.getItem("token") !== null) {
      this.$router.push("/");
    } else {
      this.$router.push("/login");
    }
  },
};
</script>
