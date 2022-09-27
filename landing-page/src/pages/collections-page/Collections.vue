<template>
  <Drawer
    :isVisible="isVisible"
    class="menu-drawer"
    title="Menu Mobile"
    width="40%"
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
            <ProductFilter />
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
                <select class="collection-body-product-sorting-select">
                  <option value="">Default sorting</option>
                  <option value="">Price: Low to High</option>
                  <option value="">Price: High to Low</option>
                  <option value="">Alphabetically: A-Z</option>
                  <option value="">Alphabetically: Z-A</option>
                </select>
              </div>
              <div class="collection-body-product-list">
                <div class="container">
                  <div class="row">
                    <ProductCollection
                      v-for="product in products"
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
                  <button><i class="fa-regular fa-circle-right"></i></button>
                  <button class="page--active">1</button>
                  <button>2</button>
                  <button><i class="fa-regular fa-circle-left"></i></button>
                </div>
                <span> Showing 1-12 of 17 Results </span>
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
      products: [
        {
          id: 2,
          images:
            "https://image-us.eva.vn/upload/1-2022/images/2022-01-27/1-1643296048-128-width800height700.jpg",
          displayName: "dkm",
          price: 150,
        },
        {
          id: 2,
          images:
            "https://image-us.eva.vn/upload/1-2022/images/2022-01-27/1-1643296048-128-width800height700.jpg",
          displayName: "dkm",
          price: 150,
        },
      ],
      isVisible: false,
      // productCategories: [
      //   { name: "All Categories", id: 1 },
      //   { name: "Furniture", id: 2 },
      //   { name: "Chair", id: 3 },
      //   { name: "Sofa", id: 4 },
      //   { name: "Decor Art", id: 5 },
      // ],
      // productPrices: [
      //   {
      //     price: "$0 - $50",
      //     id: 1,
      //   },
      //   {
      //     price: "$50 - $100",
      //     id: 2,
      //   },
      //   {
      //     price: "$100 - $150",
      //     id: 3,
      //   },
      //   {
      //     price: "$150 - $200",
      //     id: 4,
      //   },
      // ],
    };
  },
  async created() {
    try {
      const response = await requestProductDbJson.get(`/products`);
      this.products = response.data;
      console.log(response.data);
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
    // handleFilterCategory(id) {
    //   console.log(id);
    // },
    // handleFilterPrice(id) {
    //   console.log(id);
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
  },
  handleVisibleViewInfoModal() {},
};
</script>

<style scoped></style>
