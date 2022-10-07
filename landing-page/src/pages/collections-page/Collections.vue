<template>
  <Spinner v-if="spin" />
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
                <div class="collection-body-product-sorting-layout">
                  <span
                    @click="onClickLayout(true)"
                    :class="layoutStatus == true ? 'layout-active' : ''"
                    >Grid</span
                  >
                  <span
                    @click="onClickLayout(false)"
                    :class="layoutStatus == false ? 'layout-active' : ''"
                    >List</span
                  >
                </div>
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
                    <transition-group name="back-to-top-fade">
                      <ProductCollection
                        v-for="product in productFilter"
                        v-if="isShow"
                        :key="product.id"
                        :product="product"
                        :class="layoutStatus == false ? 'hiding' : ''"
                        @showCart="showCart"
                        @handleVisibleViewInfoModal="handleVisibleViewInfoModal"
                      />
                    </transition-group>
                  </div>
                  <div class="row">
                    <transition-group name="back-to-top-fade" tag="div">
                      <div
                        class="list-block col-xs-12"
                        v-for="product in productFilter"
                        v-if="isShow"
                        :key="product.id"
                        :product="product"
                        :class="layoutStatus == true ? 'hiding' : ''"
                      >
                        <div class="list-block-item">
                          <div class="col-xs-12 col-sm-4 col-md-3">
                            <RouterLink :to="'/product/' + product.id">
                              <div class="list-block-item-image">
                                <img
                                  v-bind:src="url + product.images[0]?.url"
                                  alt="product"
                                /></div
                            ></RouterLink>
                          </div>

                          <div class="col-xs-12 col-sm-8 col-md-6 col-lg-7">
                            <div class="list-block-item-content">
                              <RouterLink :to="'/product/' + product.id">
                                <h4 class="list-block-item-content__title">
                                  {{ product.displayName }}
                                </h4>
                              </RouterLink>

                              <p class="list-block-item-content__price">
                                ${{ product.price }}
                              </p>
                              <p class="list-block-item-content__description">
                                {{ product.description }}
                              </p>
                            </div>
                          </div>
                          <div class="col-xs-12 col-sm-12 col-md-3 col-lg-2">
                            <div class="rating-block">
                              <i class="fa-solid fa-star"></i>
                              <i class="fa-solid fa-star"></i>
                              <i class="fa-solid fa-star"></i>
                              <i class="fa-solid fa-star"></i>
                              <i class="fa-solid fa-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </transition-group>
                  </div>
                </div>
              </div>
              <div class="collection-body-product-pagination">
                <div class="collection-body-product-pagination-box">
                  <button @click="onClickFirstPage()">
                    <i class="fa-regular fa-circle-left"></i>
                  </button>
                  <button
                    :class="pagingStatus == 1 ? 'page--active' : ''"
                    @click="onClickPage(1)"
                  >
                    1
                  </button>
                  <button
                    :class="pagingStatus == 2 ? 'page--active' : ''"
                    @click="onClickPage(2)"
                  >
                    2
                  </button>
                  <button @click="onClickLastPage()">
                    <i class="fa-regular fa-circle-right"></i>
                  </button>
                </div>
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
import Spinner from "../../components/spinner/Spinner.vue";

export default {
  data() {
    return {
      spin: false,
      isShow: true,
      products: [],
      isVisible: false,
      productFilter: [],
      pagingStatus: 1,
      page: 1,
      pageSize: 8,
      layoutStatus: true,
      url: "http://localhost:8081/api/image/downloadFile/",
    };
  },
  async created() {
    try {
      const response = await requestProductDbJson.get(
        `/api/products?page=${this.page}&size=${this.pageSize}`
      );
      this.products = response.data;
      this.productFilter = [...response.data];
    } catch (error) {
      console.log("alo");
    }
  },
  components: {
    ProductCollection,
    ProductFilter,
    Footer,
    Header,
    Drawer,
    Spinner,
  },
  computed: {
    productFilter() {
      return this.productFilter;
    },
    pagingStatus() {
      return this.pagingStatus;
    },
  },
  methods: {
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
      this.$store.commit("ADD_PRODUCT_ONE", data);
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
    tranformArr(arr) {
      return arr.map((item) => ({
        id: item.id,
        displayName: item.displayName,
        description: item.description,
        price: item.price,
        images: item.images,
        categories: item?.categories?.map((item) => item.name),
      }));
    },

    //Category filter
    handleFilterCategory(value) {
      if (value === "All Categories") {
        setTimeout(() => {
          this.spin = false;
          this.isShow = true;
          return (this.productFilter = this.products);
        }, 1500);
        this.spin = true;
        this.isShow = false;
      } else {
        setTimeout(() => {
          this.spin = false;
          this.isShow = true;
          return (this.productFilter = this.tranformArr(this.products).filter(
            (item) => item.categories?.toString().includes(value)
          ));
        }, 1500);
        this.spin = true;
        this.isShow = false;
      }
    },
    handleFilterPrice(value) {
      if (value === "$0 - $50") {
        setTimeout(() => {
          this.spin = false;
          this.isShow = true;
          return (this.productFilter = this.products.filter(
            (item) => item.price > 0 && item.price < 50
          ));
        }, 1500);
        this.spin = true;
        this.isShow = false;
      } else if (value === "$50 - $100") {
        setTimeout(() => {
          this.spin = false;
          this.isShow = true;
          return (this.productFilter = this.products.filter(
            (item) => item.price > 50 && item.price < 100
          ));
        }, 1500);
        this.spin = true;
        this.isShow = false;
      } else if (value === "$100 - $150") {
        setTimeout(() => {
          this.spin = false;
          this.isShow = true;
          return (this.productFilter = this.products.filter(
            (item) => item.price > 100 && item.price < 150
          ));
        }, 1500);
        this.spin = true;
        this.isShow = false;
      } else if (value === "$150 - $200") {
        setTimeout(() => {
          this.spin = false;
          this.isShow = true;
          return (this.productFilter = this.products.filter(
            (item) => item.price > 150 && item.price < 200
          ));
        }, 1500);
        this.spin = true;
        this.isShow = false;
      }
    },

    //Paginations
    onClickFirstPage() {
      if (this.pagingStatus === 2) {
        this.spin = true;
        this.isShow = false;
        this.onClickPage(1);
      }
    },
    onClickLastPage() {
      if (this.pagingStatus === 1) {
        this.spin = true;
        this.isShow = false;
        this.onClickPage(2);
      }
    },
    async handleToPageTwo() {
      try {
        const response = await requestProductDbJson.get(
          `/api/products?page=${this.page}&size=${this.pageSize}`
        );
        setTimeout(() => {
          this.spin = false;
          this.isShow = true;
          this.products = response.data;
          this.productFilter = [...response.data];
        }, 1500);
        this.spin = true;
        this.isShow = false;
      } catch (error) {
        console.log("alo");
      }
    },
    onClickPage(value) {
      this.page = value;
      if (value === 1) {
        this.pagingStatus = 1;
        this.handleToPageTwo();
      } else if (value === 2) {
        this.pagingStatus = 2;
        this.handleToPageTwo();
      }
    },

    onClickLayout(value) {
      this.layoutStatus = value;
      if (value == true) {
        setTimeout(() => {
          this.spin = false;
          this.isShow = true;
          this.layoutStatus = true;
        }, 1500);
        this.spin = true;
        this.isShow = false;
      } else if (value == false) {
        setTimeout(() => {
          this.spin = false;
          this.isShow = true;
          this.layoutStatus = false;
        }, 1500);
        this.spin = true;
        this.isShow = false;
      }
    },

    // scrollUpToTop() {
    //   window.smoothScroll();
    // },
  },
  // mounted() {
  //   window.smoothScroll = () => {
  //     let currentScroll =
  //       document.documentElement.scrollTop || document.body.scrollTop;
  //     if (currentScroll > 0) {
  //       window.requestAnimationFrame(window.smoothScroll);
  //       window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)));
  //     }
  //   };
  // },
};
</script>

<style></style>
