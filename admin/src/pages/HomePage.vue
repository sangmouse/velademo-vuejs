<template>
  <div id="home-page">
    <div class="container-fluid">
      <div class="table-list">
        <div class="header">
          <div class="left-side">
            <p>Entries</p>
            <div class="select-page-size">
              <a-select
                ref="select"
                v-model:value="pageSize"
                style="width: 120px; height: 40px"
                :options="options"
                @change="handleChange"
              >
              </a-select>
            </div>
            <RouterLink to="add-product"> Add Product </RouterLink>
          </div>
          <div class="right-side">
            <a-input
              class="input-search"
              size="large"
              v-model:value="searchProduct"
              @change="handleSearchProduct"
              placeholder="Searching..."
            />
          </div>
        </div>
        <Table :columns="columns" :source="source" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "./home-page.scss";
import Table from "../components/table/Table.vue";
import http from "@/api/request";

const token = localStorage.getItem("token-admin");

export default {
  components: { Table },

  data() {
    return {
      pageSize: 8,
      searchProduct: "",
      debounce: null,
      options: [
        {
          value: 10,
          label: 10,
        },
        {
          value: 8,
          label: 8,
        },
      ],
      columns: [
        {
          title: "ID",
          dataIndex: "id",
          key: "id",
          width: 200,
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Price",
          dataIndex: "price",
          key: "price",
        },
        {
          title: "Categories",
          dataIndex: "categories",
          key: "categories",
        },
        {
          title: "Created Date",
          dataIndex: "createdDate",
          key: "createdDate",
        },
        {
          title: "Updated Date",
          dataIndex: "updatedDate",
          key: "updatedDate",
        },
        {
          title: "Created User",
          dataIndex: "createdUser",
          key: "createdUser",
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
          price: 100,
          categories: ["sofa", "furniture"].toString(),
          createdDate: "16 Mar, 2022",
          updatedDate: "16 Mar, 2022",
          createdUser: "Long",
        },
      ],
    };
  },

  created() {
    http
      .get("/api/admin/products?page=1&size=10", {
        headers: { Authorization: `Bearer ${token?.length && token}` },
      })
      .then((res) => {})
      .catch((err) => {});
  },

  methods: {
    async handleChange(value: string) {
      console.log(Number(value));
      const response = await http.get("/products");
      this.source = response;
    },

    async handleSearchProduct(event) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        console.log(event.target.value);
      }, 600);
    },
  },
};
</script>

<style scoped></style>
