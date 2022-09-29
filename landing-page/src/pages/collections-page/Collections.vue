<template>
  <Drawer
    :isVisible="isVisible"
    class="menu-drawer"
    title="Menu Mobile"
    width="45%"
    placement="left"
    @handleClose="handleClose"
  >
    <ProductFilter
      @handleFilterCategory="handleFilterCategory"
      @handleFilterPrice="handleFilterPrice"
    />
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
            <ProductFilter
              @handleFilterCategory="handleFilterCategory"
              @handleFilterPrice="handleFilterPrice"
            />
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
                      v-for="product in productFilter"
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
                  <button @click="onClickFirstPage()">
                    <i class="fa-regular fa-circle-left"></i>
                  </button>
                  <button
                    :class="pagingStatus ? 'page--active' : ''"
                    @click="onClickPage('1')"
                  >
                    1
                  </button>
                  <!-- <button
                    v-for="(page, index) in pages" :key="index"
                    type="button"
                    :class="pagingStatus ? 'page--active' : ''"
                    @click="onClickPage()"
                  >
                    {{page.number}}
                  </button> -->
                  <button @click="onClickLastPage()">
                    <i class="fa-regular fa-circle-right"></i>
                  </button>
                </div>
                <span> Showing 1 - 8 of 8 Results </span>
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
      productFilter: [],
      pagingStatus: true,
    };
  },
  async created() {
    try {
      const response = await requestProductDbJson.get(`/products`);
      this.products = response.data;
      this.productFilter = [...response.data.filter((item) => item.id <= 8)];
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
    // onClickPage(num) {
    //   if (num === "1") {
    //     this.pagingStatus = true;
    //     // console.log(this.pagingStatus);
    //     this.productFilter = this.products.filter((item) => item.id <= 8);
    //   } else if (num === "2") {
    //     this.pagingStatus = true;
    //     this.productFilter = this.products.filter((item) => item.id > 8);
    //   }
    // },
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
        this.productFilter = this.products.sort((a, b) =>
          a.price > b.price ? 1 : -1
        );
      } else if (e.target.value === "highToLow") {
        this.productFilter = this.products.sort((a, b) =>
          a.price < b.price ? 1 : -1
        );
      } else if (e.target.value === "aToZ") {
        this.productFilter = this.products.sort((a, b) =>
          a.displayName.localeCompare(b.displayName)
        );
      } else if (e.target.value === "ztoA") {
        this.productFilter = this.products.sort((a, b) =>
          a.displayName === b.displayName
            ? 0
            : a.displayName > b.displayName
            ? -1
            : 1
        );
      } else if (e.target.value === "default") {
        this.productFilter = this.products;
      }
    },

    //Category filter
    handleFilterCategory(value) {
      if (value === "All Categories") {
        console.log(value);
        return (this.productFilter = this.products);
      } else if (value) {
        console.log(value);
        return (this.productFilter = this.products.filter((item) =>
          item.categories.toString().includes(value)
        ));
      }
    },
    handleFilterPrice(value) {
      if (value === "$0 - $50") {
        return (this.productFilter = this.products.filter(
          (item) => item.price > 0 && item.price < 50
        ));
      } else if (value === "$50 - $100") {
        return (this.productFilter = this.products.filter(
          (item) => item.price > 50 && item.price < 100
        ));
      } else if (value === "$100 - $150") {
        return (this.productFilter = this.products.filter(
          (item) => item.price > 100 && item.price < 150
        ));
      } else if (value === "$150 - $200") {
        return (this.productFilter = this.products.filter(
          (item) => item.price > 150 && item.price < 200
        ));
      }
    },

    //Paginations
    onClickFirstPage() {},
    onClickLastPage() {},
  },
};
</script>

<style></style>
