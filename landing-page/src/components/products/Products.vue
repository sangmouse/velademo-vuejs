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
                @handleVisibleCart="handleVisibleCart"
                @handleVisibleViewInfoModal="handleVisibleViewInfoModal"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Drawer
      :isVisible="isVisibleDrawer"
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
import http from "@/api/request";
import Product from "../product/Product.vue";

export default {
  data() {
    return {
      isLoading: false,
      isVisibleDrawer: false,
      products: [],
    };
  },
  components: {
    Drawer,
    Product,
  },
  methods: {
    handleVisibleCart() {
      this.isVisibleDrawer = true;
    },
    handleCloseDrawer(event: any) {
      this.isVisibleDrawer = false;
    },
    handleVisibleViewInfoModal() {
      // this.isVisible = true;
    },
  },
  async created() {
    const response = await http.get("/api/products?page=1&size=8");
    this.products = response;
  },
};
</script>
