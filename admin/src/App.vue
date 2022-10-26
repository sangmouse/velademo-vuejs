<template>
  <div style="height: 100px" />
  <Header />
  <div class="container-layout">
    <div>
      <Sidebar  />
    </div>
    <div class="app-main">
      <RouterView />
    </div>
  </div>
  <Footer />
</template>

<script lang="ts">
import Header from "./layouts/header/Header.vue";
import Footer from "./layouts/footer/Footer.vue";
import Sidebar from "./layouts/Sidebar.vue"
export default {
  components: {
    Header,
    Footer,
    Sidebar,
  },
  methods: {},
  updated() { },
};
</script>
<style scoped>
.container-layout {
  display: flex;
}

.app-main {
  flex: 1;
}
</style>
