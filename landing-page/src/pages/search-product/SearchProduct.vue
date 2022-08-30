<template>
  <div class="container">
    <div class="search">
      <h1 class="search__title">
        Search for
        <span v-if="showmessageSearch"> "{{ messageSearch }}" </span> products
        on our site
      </h1>
      <div class="search-group">
        <input
          type="text"
          v-model="messageSearch"
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
        <Product
          v-if="searchResult?.length > 0"
          v-for="product in searchResult"
          v-bind:key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import http from "@/api/request";
import "./search-product.scss";
import Product from "../../components/product/Product.vue";
export default {
  created() {
    this.$watch(
      () => this.$route.query.q,
      async (value, _) => {
        if (value.trim().length > 0) {
          const response = await http.get("");
          this.searchResult = response;
        } else {
          this.searchResult = [];
        }
      }
    );
  },
  data() {
    return {
      messageSearch: "",
      showmessageSearch: false,
      searchResult: [],
    };
  },
  methods: {
    handleSearch() {
      this.showmessageSearch = true;
      console.log(this.messageSearch);
    },
  },
  components: { Product },
};
</script>
