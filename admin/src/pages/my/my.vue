<template>
  <div>
    <div class="header">
      <div class="left-side">
        <p>Entries</p>
        <div class="select-page-size">
          <a-select
            ref="select"
            v-model:value="pageSize"
            style="width: 120px; height: 40px"
            :options="options"
            @change="handleChangeSize"
          >
          </a-select>
        </div>
        <RouterLink to="addMy"> Add Product </RouterLink>
      </div>
      <div class="right-side">
        <a-input
          class="input-search"
          size="large"
          @input="debounceSearch"
          placeholder="Searching..."
        />
      </div>
      <div class="paginate">
        <p></p>
        <a-pagination
          showLessItems
          :total="50"
          :showSizeChanger="false"
          @change="handleChangePageNumber"
        />
      </div>
    </div>
    <a-table :columns="columns" :data-source="data" @change="onChange" :pagination="pagination" />
  </div>
</template>

<script>
import "./my.scss";
import http from "@/api/request";
import { API } from "@/constants/api";
import requestUnauthorized from "@/api/request";
import { getJwtToken } from "@/utils/helpers";
export default {
  name: "my",
  data() {
    return {
      pagination: false,
      searchProduct: "",
      columns: [
        {
          title: "Name",
          dataIndex: "name",
          filters: [
            {
              text: "Joe",
              value: "Joe",
            },
            {
              text: "Jim",
              value: "Jim",
            },
            {
              text: "Submenu",
              value: "Submenu",
              children: [
                {
                  text: "Green",
                  value: "Green",
                },
                {
                  text: "Black",
                  value: "Black",
                },
              ],
            },
          ],
          // specify the condition of filtering result
          // here is that finding the name started with `value`
          onFilter: (value, record) => record.name.indexOf(value) === 0,
          sorter: (a, b) => a.name.length - b.name.length,
          sortDirections: ["descend"],
        },
        {
          title: "Age",
          dataIndex: "age",
          defaultSortOrder: "descend",
          sorter: (a, b) => a.age - b.age,
        },
        {
          title: "Categories",
          dataIndex: "address",
          filters: [
            {
              text: "London",
              value: "London",
            },
            {
              text: "New York",
              value: "New York",
            },
          ],
          filterMultiple: false,
          onFilter: (value, record) => record.address.indexOf(value) === 0,
          sorter: (a, b) => a.address.length - b.address.length,
          sortDirections: ["descend", "ascend"],
        },
      ],
      data: [
        {
          key: "1",
          name: "John Brown",
          age: 32,
          address: "New York No. 1 Lake Park",
        },
        {
          key: "2",
          name: "Jim Green",
          age: 42,
          address: "London No. 1 Lake Park",
        },
        {
          key: "3",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. 1 Lake Park",
        },
        {
          key: "4",
          name: "Jim Red",
          age: 32,
          address: "London No. 2 Lake Park",
        },
      ],
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
      pageSize: 5,
      pageNumber: 1,
    };
  },
  async created() {
    if (!getJwtToken()) {
      this.$router.push({
        name: "login-page",
      });
    } else {
      const response = await requestUnauthorized.get(
        `${API.ADMIN.PRODUCT_LIST}?page=${this.pageNumber}&&size=${this.pageSize}`
      );
      console.log(response);
      this.data = this.transformData(response);
    }
  },
  methods: {
    onChange(pagination, filters, sorter) {
      console.log("params", pagination, filters, sorter);
    },
    transformData(arr) {
      return arr.map((item) => ({
        key: item?.id,
        name: item?.displayName,
        age: new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "USD",
        }).format(item?.price),
        address: item?.categories.map((item) => item.name).toString(),
      }));
    },
    async startListSearch() {
      try {
        const response = await requestUnauthorized.get(
          `/api/search?page=${this.pageNumber}&&size=${this.pageSize}&name=${this.searchProduct}`
        );
        this.data = this.transformData(response);
      } catch (error) {
        console.log(err);
      }
    },
    async startListProduct() {
      try {
        const response = await requestUnauthorized.get(
          `${API.ADMIN.PRODUCT_LIST}?page=${this.pageNumber}&&size=${this.pageSize}`
        );
        this.data = this.transformData(response);
      } catch (error) {
        console.log(error);
      }
    },
    debounceSearch(e) {
      this.searchProduct = e.target.value.trim();
      if (this.searchProduct !== "") {
        this.startListSearch();
      } else {
        this.startListProduct();
      }
    },
    handleChangePageNumber(pageNumber) {
      this.pageNumber = pageNumber;
      if (this.searchProduct !== "") {
        this.startListSearch();
      } else {
        this.startListProduct();
      }
    },
    handleChangeSize(pageSize) {
      this.pageSize = pageSize;
      if (this.searchProduct !== "") {
        this.startListSearch();
      } else {
        this.startListProduct();
      }
    },
  },
};
</script>
