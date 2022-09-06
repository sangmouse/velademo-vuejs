<template>
  <div id="home-page">
    <div class="container">
      <div class="header">
        <div class="left-side">
          <p>Entries</p>
          <RouterLink to="add-product"> Add Product </RouterLink>
        </div>
        <div class="right-side"></div>
      </div>
      <Table />
    </div>
  </div>
</template>

<script lang="ts">
import "./home-page.scss";
import Table from "../components/table/Table.vue";
export default {
  components: { Table },
};
</script>

<style scoped></style>
