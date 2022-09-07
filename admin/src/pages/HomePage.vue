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

<script >
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
          title: "id",
          dataIndex: "id",
          key: "id",
          width: 200,
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "displayName",
        },
        {
          title: "price",
          dataIndex: "price",
          key: "price",
        },
        {
          title: "categories",
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
      source: [],
    };
  },

  created() {
    http
      .get("/api/productsAdmin?page=1&&size=10", {
        headers: { Authorization: `Bearer ${token?.length && token}` },
      })
      .then((res) => {
        console.log(res);
        const data = this.transformData(res)
        console.log(data);
        this.source = data
      } )
      .catch((err) => 
      console.log(err)
      );
  },
  computed:{
    source(){
      return this.source
    }
  },
  methods: {

    transformData(arr){
      return arr.map(item => ({
        id: item?.id,
        name: item?.name,
        price: item?.price,
        categories: item?.categories.map(item => item.name).toString(),
        createdDate: item.createdDtm.slice(0,10).split('-').reverse().join("-"),
        updatedDate: item.updatedDtm,
        createdUser: item.creator.name,
      }))
    },
    async handleChange(value) {
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
