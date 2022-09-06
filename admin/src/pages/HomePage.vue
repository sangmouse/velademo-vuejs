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
      <Table :columns="columns" :source="source" />
    </div>
  </div>
</template>

<script lang="ts">
import "./home-page.scss";
import Table from "../components/table/Table.vue";
export default {
components: { Table },

  data() {
    return {
      columns: [
        {
          title: "ID",
          dataIndex: "id",
          key: "id",
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Address",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "Actions",
          key: "action",
        },
      ],
      source: [
        {
          id: "1",
          name: "John Brown",
          address: "New York No. 1 Lake Park",
        },
        {
          id: "2",
          name: "Jim Green",
          address: "London No. 1 Lake Park",
        },
        {
          id: "3",
          name: "Joe Black",
          address: "Sidney No. 1 Lake Park",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
