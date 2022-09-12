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
        <Table
          :columns="columns"
          :source="source"
          @handleChangePage="handleChangePage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "./home-page.scss";
import Table from "../components/table/Table.vue";
import http from "@/api/request";
import { API } from "@/constants/api";
import requestUnauthorized from "./../api/request";
import { getJwtToken } from "./../utils/helpers";

const token = localStorage.getItem("token-admin");

export default {
  components: { Table },

  data() {
    return {
      pageSize: 10,
      pageNumber: 1,
      searchProduct: "",
      debounce: null,
      options: [
        {
          value: 5,
          label: 5,
        },
        {
          value: 10,
          label: 10,
        },
        {
          value: 20,
          label: 20,
        },
        {
          value: 50,
          label: 50,
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
          dataIndex: "displayName",
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
    if (!getJwtToken()) {
      this.$router.push({
        name: "login-page",
      });
    } else {
      requestUnauthorized
        .get(`${API.ADMIN.PRODUCT_LIST}?page=1&&size=10`)
        .then((res) => {
          const data = this.transformData(res);
          this.source = data;
        })
        .catch((err) => console.log(err));
    }
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
    async startListSearch() {
      try {
        const res = await requestUnauthorized.get(
          `/api/search?page=${this.pageNumber}&size=${this.pageSize}&name=${this.searchProduct}`
        );
        const data = this.transformData(res);
        return (this.source = data);
      } catch (error) {
        this.source = [];
      }
    },
    async startListProduct() {
      try {
        const response = await requestUnauthorized.get(
          `${API.ADMIN.PRODUCT_LIST}?page=${this.pageNumber}&&size=${this.pageSize}`
        );
        const data = this.transformData(response);
        this.source = data;
      } catch (error) {
        this.source = [];
      }
    },
    async search(e) {
      this.searchProduct = e.target.value.trim();
      if (this.searchProduct === "") {
        this.startListProduct();
      } else {
        this.startListSearch();
      }
    },
    async handleChange(value) {
      console.log(value);
      this.pageSize = value;
      if (this.searchProduct !== "") {
        this.startListSearch();
      } else {
        this.startListProduct();
      }
    },
    async handleChangePage(pageNumbervalue) {
      this.pageNumber = pageNumbervalue;
      if (this.searchProduct !== "") {
        this.startListSearch();
      } else {
        this.startListProduct();
      }
    },
  },
};
</script>

<style scoped></style>
