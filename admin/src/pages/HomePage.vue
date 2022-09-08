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
              @input="search"
              placeholder="Searching..."
            />
          </div>
        </div>
        <Table :columns="columns" :source="source" @handleChangePage="handleChangePage" />
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
      pageNumber: 1,
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
          dataIndex: "displayName",
          key: "displayName",
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
      source: [],
    };
  },

  created() {
    http
      .get("/api/productsAdmin?page=1&&size=8")
      .then((res) => {
        const data = this.transformData(res);
        this.source = data;
      })
      .catch((err) => console.log(err));
  },
  computed: {
    source() {
      return this.source;
    },
  },
  methods: {
    transformData(arr) {
      return arr.map((item) => ({
        id: item?.id,
        displayName: item?.displayName,
        price: new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "USD",
        }).format(item?.price),
        categories: item?.categories.map((item) => item.name).toString(),
        createdDate: item.createdDtm
          ?.slice(0, 10)
          .split("-")
          .reverse()
          .join("-"),
        updatedDate: item.updatedDtm
          ?.slice(0, 10)
          .split("-")
          .reverse()
          .join("-"),
        createdUser: item.creator?.name,
      }));
    },
    async search(e) {
      this.searchProduct = e.target.value.trim();
      if (this.searchProduct == "") {
        try {
          const res = await http.get(`/api/productsAdmin?page=1&&size=8`);
          const data = this.transformData(res);
          return (this.source = data);
        } catch (error) {
          console.log(error);
        }
      } else{
        try {
        const res = await http.get(
          `/api/search?page=${this.pageNumber}&size=${this.pageSize}&name=${this.searchProduct}`
        );
        const data = this.transformData(res);
        return (this.source = data);
      } catch (error) {
        this.source = [];
      }
      }
      
    },
    async handleChange(value) {
      this.pageSize = value;
      if (this.searchProduct != "") {
        try {
          const res = await http.get(
            `/api/search?page=${this.pageNumber}&size=${this.pageSize}&name=${this.searchProduct}`
          );
          const data = this.transformData(res);
          return (this.source = data);
        } catch (error) {
          this.source = [];
        }
      } else {
        try {
          const response = await http.get(
            `/api/productsAdmin?page=${this.pageNumber}&&size=${this.pageSize}`
          );
          const data = this.transformData(response);
          this.source = data;
        } catch (error) {
          this.source = [];
        }
      }
    },
    async handleChangePage(pageNumbervalue) {
      this.pageNumber = pageNumbervalue;
      if (this.searchProduct != "") {
        try {
          const res = await http.get(
            `/api/search?page=${this.pageNumber}&size=${this.pageSize}&name=${this.searchProduct}`
          );
          const data = this.transformData(res);
          return (this.source = data);
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const response = await http.get(
            `/api/productsAdmin?page=${this.pageNumber}&&size=${this.pageSize}`
          );
          const data = this.transformData(response);
          this.source = data;
        } catch (error) {
          this.source = [];
        }
      }
    },
  },
 
};
</script>

<style scoped></style>
