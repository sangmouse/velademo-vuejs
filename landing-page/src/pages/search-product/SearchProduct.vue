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
            @showCart="showCart"
          />
        </div>
      </div>
    </div>
  </div>
    <Cart />
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
    };
  },
  methods: {
    showCart() {
      this.$store.commit("ISVISIBLE_CART");
    },
    handleSearch() {
      this.$router.push({
        name: "search-product",
        query: {
          q: this.search,
        },
      });
    },
    handleCloseDrawer(){
      this.isVisibleViewCart = false;
    }
  },
  components: { Product, Drawer },
};
</script>
