<template>
  <Drawer
    :isVisible="isVisible"
    class="menu-drawer"
    title="Menu Mobile"
    width="45%"
    placement="left"
    @handleClose="handleClose"
  >
    <ProductFilter />
  </Drawer>
  <Header />
  <div class="collections">
    <div class="collections-header">
      <div class="collections-header-img">
        <img
          src="https://cdn.shopify.com/s/files/1/0376/9440/6700/files/bg-breacumb.jpg?v=1613729001"
          alt="Velademo-img"
        />
      </div>
      <div class="collections-header-title">
        <h1 class="collections-header-title__text">Collections</h1>
      </div>
    </div>
    <div class="collections-body">
      <div class="container">
        <div class="row">
          <div
            class="col col-xl-2 col-xxl-2 col-lg-2 col-md-4 col-sm-4 col-xs-0 display-none"
          >
            <ProductFilter @handleFilterCategory="handleFilterCategory" />
          </div>
          <div
            class="col col-xl-10 col-xxl-10 col-lg-10 col-md-8 col-sm-8 col-xs-12 full-width"
          >
            <div class="collection-body-product">
              <div class="collection-body-product-sorting">
                <button
                  type="button"
                  class="btn-burger"
                  v-on:click="handleVisibleMenu"
                >
                  <span> Filter </span>
                </button>
                <select
                  class="collection-body-product-sorting-select"
                  @click="handleSort($event)"
                >
                  <option value="default">Default sorting</option>
                  <option value="lowToHigh">Price: Low to High</option>
                  <option value="highToLow">Price: High to Low</option>
                  <option value="aToZ">Alphabetically: A-Z</option>
                  <option value="ztoA">Alphabetically: Z-A</option>
                </select>
              </div>
              <div class="collection-body-product-list">
                <div class="container">
                  <div class="row">
                    <ProductCollection
                      v-for="product in productPagination"
                      :key="product.id"
                      :product="product"
                      @showCart="showCart"
                      @handleVisibleViewInfoModal="handleVisibleViewInfoModal"
                    />
                  </div>
                </div>
              </div>
              <div class="collection-body-product-pagination">
                <div class="collection-body-product-pagination-box">
                  <button @click="handlePagination('1')">
                    <i class="fa-regular fa-circle-left"></i>
                  </button>
                  <button
                    :class="pagingStatus ? 'page--active' : ''"
                    @click="handlePagination('1')"
                  >
                    1
                  </button>
                  <button
                    :class="pagingStatus ? 'page--active' : ''"
                    @click="handlePagination('2')"
                  >
                    2
                  </button>
                  <button @click="handlePagination('2')">
                    <i class="fa-regular fa-circle-right"></i>
                  </button>
                </div>
                <span> Showing 1 - 8 of 9 Results </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import "./collections.scss";
import Drawer from "../../components/drawer/Drawer.vue";
import requestProductDbJson from "../../api/requestProducDbJson";
import ProductCollection from "../../components/product/ProductCollection.vue";
import ProductFilter from "../../components/product-filter/ProductFilter.vue";
import Footer from "../../layout/footer/Footer.vue";
import Header from "../../layout/header/Header.vue";

export default {
  data() {
    return {
      products: [],
      isVisible: false,
      productPagination: [],
      pagingStatus: false,
    };
  },
  async created() {
    try {
      const response = await requestProductDbJson.get(`/products`);
      this.products = response.data;
      this.productPagination = [
        ...response.data.filter((item) => item.id <= 8),
      ];
    } catch (error) {
      console.log();
    }
  },
  components: {
    ProductCollection,
    ProductFilter,
    Footer,
    Header,
    Drawer,
  },
  methods: {
    handlePagination(num) {
      if (num === "1") {
        this.pagingStatus = true;
        console.log(this.pagingStatus);
        this.productPagination = this.products.filter((item) => item.id <= 8);
      } else if (num === "2") {
        this.pagingStatus = true;
        this.productPagination = this.products.filter((item) => item.id > 8);
      }
    },
    handleVisibleMenu() {
      this.isVisible = true;
    },
    handleClose() {
      this.isVisible = false;
    },
    showCart(id) {
      const index = this.products.findIndex((item) => item.id === id);
      const infor = this.products[index];
      const data = {
        listImg: infor.images,
        id: infor.id,
        name: infor.displayName,
        price: infor.price,
        quantity: 1,
      };
      // this.$store.commit("ADD_PRODUCT_ONE", data);
      this.$store.commit("ISVISIBLE_CART");
    },
    handleVisibleViewInfoModal() {},

    //Sorting
    handleSort(e) {
      if (e.target.value === "lowToHigh") {
        this.productPagination = this.products.sort((a, b) =>
          a.price > b.price ? 1 : -1
        );
      } else if (e.target.value === "highToLow") {
        this.productPagination = this.products.sort((a, b) =>
          a.price < b.price ? 1 : -1
        );
      } else if (e.target.value === "aToZ") {
        this.productPagination = this.products.sort((a, b) =>
          a.displayName.localeCompare(b.displayName)
        );
      } else if (e.target.value === "ztoA") {
        this.productPagination = this.products.sort((a, b) =>
          a.displayName === b.displayName
            ? 0
            : a.displayName > b.displayName
            ? -1
            : 1
        );
      } else if (e.target.value === "default") {
        this.productPagination = this.products.reverse();
      }
    },

    //Category filter
    handleFilterCategory(value) {
      console.log(value);
    },
  },
};
</script>

<style></style>
