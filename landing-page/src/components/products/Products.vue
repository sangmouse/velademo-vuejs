<template>
  <div>
    <div id="products">
      <div class="body">
        <h3 class="text-center">Trending Products</h3>
        <p class="text-center">Top view in this week</p>
        <div class="product-list">
          <div class="container">
            <div class="row">
              <Product
                v-for="product in products"
                :key="product.id"
                :product="product"
                @showCart="showCart"
                @handleVisibleViewInfoModal="handleVisibleViewInfoModal"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Cart />
  </div>

  <!-- modal view info -->
  <!-- <a-modal
    v-model:visible="isVisible"
    centered
    wrapClassName="view-info-modal"
    :footer="null"
    :title="null"
    width="50%"
  >
    <div class="modal-body">
      <div class="container">
        <div class="row">
          <div class="col-xxl-4">slider in this</div>
          <div class="col-xxl-8">
            <div class="info-detail">
              <h3>
                <RouterLink to="/">Beoplay A1</RouterLink>
              </h3>
              <p>
                Most of us are familiar with the iconic design of the egg shaped
                chair floating in the air. The Hanging Egg Chair is a critically
                acclaimed design that has enjoyed praise worldwide ever since
                the distinctive sculptural shape was created.
              </p>
              <p class="price">$56.53</p>
              <div class="add-cart">
                <div class="quantity">
                  <button class="btn btn-increment">-</button>
                  <p>1</p>
                  <button class="btn btn-increment">+</button>
                </div>
                <button class="btn btn-add-to-cart">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a-modal> -->
</template>

<script lang="ts">
import "./products.scss";
import Drawer from "../drawer/Drawer.vue";
import Product from "../product/Product.vue";
import requestUnauthorized from "@/api/request";

export default {
  data() {
    return {
      isLoading: false,
      products: [],
    };
  },
  components: {
    Drawer,
    Product,
  },
  methods: {
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
    handleCloseDrawer(event: any) {
      this.isVisibleDrawer = false;
    },
    handleVisibleViewInfoModal() {},
  },
  async created() {
    const response = await requestUnauthorized.get(
      "/api/products?page=1&size=8"
    );
    this.products = response;
  },
};
</script>