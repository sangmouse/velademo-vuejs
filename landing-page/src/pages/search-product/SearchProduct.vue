<template>
  <div>
  <div class="container">
    <div class="search">
      <h1 class="search__title">
        Search for
        <span> "{{ search }}" </span> products on our site
      </h1>
      <div class="search-group">
        <input
          type="text"
          v-model="search"
          placeholder="Enter keywords to search..."
          class="search-group__input form-control"
        />
        <div class="search-group-addon">
          <button
            class="btn search-group-addon__btn"
            @click="handleSearch"
            type="button"
          >
            <img src="../../assets/images/search.png" alt="search-i" />
          </button>
        </div>
      </div>
      <div class="search-list">
        <div class="row">
          <Product
            v-for="product in searchResult"
            v-bind:key="product.id"
            :product="product"
            @handleVisibleCart="handleVisibleCart"
          />
        </div>
      </div>
    </div>
  </div>
  <Drawer
      :isVisible="isVisibleViewCart"
      class="view-cart-drawer"
      title="Shopping Cart"
      @handle-close="handleCloseDrawer"
    >
      <div id="view-cart">
        <div class="products">
          <div class="item">
            <div class="info">
              <div class="img">
                <RouterLink to="/">
                  <img
                    src="../../assets/images/products/product_3_xs.jpg"
                    alt="product-img"
                  />
                </RouterLink>
              </div>
              <div class="order">
                <RouterLink to="/sdfdsf">
                  <h5>Outdoor Dining Table</h5>
                </RouterLink>
                <p>$85.52</p>
                <div class="action">
                  <button class="btn btn-increment">-</button>
                  <p class="quantity">2</p>
                  <button class="btn btn-increment">+</button>
                </div>
              </div>
            </div>
            <button class="btn-remove">X</button>
          </div>
        </div>
        <div class="total-price">
          <p>Subtotal</p>
          <h5>$987.34</h5>
        </div>
        <p class="privacy">
          Shipping, taxes, and discounts will be calculated at checkout.
        </p>
        <button class="btn-view-cart">View Cart</button>
      </div>
    </Drawer>
  </div>
</template>
<script lang="ts">
import http from "@/api/request";
import "./search-product.scss";
import Product from "../../components/product/Product.vue";
import Drawer from "../../components/drawer/Drawer.vue";
export default {
  async created() {
    if (this.$route.query.q.length) {
      this.searchResult = await http.get(
        `/api/search?page=1&size=8&name=${this.$route.query.q}`
      );
    }

    this.$watch(
      () => this.$route.query.q,
      async (value, _) => {
        this.search = value;
        if (value.trim().length > 0) {
          this.searchResult = await http.get(
            `/api/search?page=1&size=8&name=${this.$route.query.q}`
          );
        } else {
          this.searchResult = [];
        }
      }
    );
  },
  data() {
    return {
      search: this.$route.query.q,
      searchResult: [],
      isVisibleViewCart: false,
    };
  },
  methods: {
    handleSearch() {
      this.$router.push({
        name: "search-product",
        query: {
          q: this.search,
        },
      });
    },
    handleVisibleCart(){
      this.isVisibleViewCart = true;
    },
    handleCloseDrawer(){
      this.isVisibleViewCart = false;
    }
  },
  components: { Product, Drawer },
};
</script>
