<template>
  <div>
    <div id="product-detail">
      <div class="body">
        <div class="container">
          <div class="row">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-12">
              <div class="images">
                <a-carousel
                  arrows
                  dots-class="slick-dots slick-thumb"
                  effect="fade"
                >
                  <template #customPaging="props">
                    <a>
                      <img :src="getImgUrl(props.i)" />
                    </a>
                  </template>
                  <div v-for="item in productDetail?.images" :key="item">
                    <img :src="item.url" />
                  </div>
                </a-carousel>
              </div>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-12">
              <div class="info">
                <h2>{{ productDetail?.displayName ?? "" }}</h2>
                <p>
                  {{ productDetail?.description ?? "" }}
                </p>
                <h5>${{ productDetail?.price }}</h5>
                <div class="action">
                  <div class="quantity">
                    <button class="btn">-</button>
                    <p>1</p>
                    <button class="btn">+</button>
                  </div>
                  <button
                    class="btn-add-to-cart"
                    type="button"
                    v-on:click="handleVisibleCart"
                  >
                    <p class="icon">
                      <img
                        src="../../assets/images/shopping-bag-w-24.png"
                        alt="shop-cart"
                      />
                    </p>
                    <div class="text-field">Add To Cart</div>
                  </button>
                </div>
                <p class="category">
                  <b>Categories: </b>
                  <span>{{
                    productDetail?.categories
                      ?.map((category) => ` ${category.name}`)
                      .toString() || ""
                  }}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="products-relate">
              <h2 class="text-center">maybe you like</h2>
              <p class="text-center">
                Mirum est notare quam littera gothica quam nunc putamus parum
                claram!
              </p>
              <div class="products-see-more">
                <Carousel :slidesToShow="4" :dots="false">
                  <div
                    class="item"
                    v-for="product in products"
                    v-bind:key="product.id"
                  >
                    <div class="action">
                      <button
                        class="btn btn-add-cart"
                        v-on:click="handleVisibleCart"
                      >
                        <span>
                          <img
                            src="../../assets/images/shopping-bag-16.png"
                            alt="add-cart"
                          />
                        </span>
                      </button>
                      <button
                        class="btn btn-view"
                        v-on:click="handleVisibleViewInfoModal"
                      >
                        <span>
                          <img
                            src="../../assets/images/search-b-16.png"
                            alt="add-cart"
                          />
                        </span>
                      </button>
                    </div>
                    <RouterLink v-bind:to="'/product/' + product.id">
                      <div class="img">
                        <img
                          v-bind:src="product.images[0]?.url"
                          alt="product"
                        />
                      </div>
                    </RouterLink>
                    <RouterLink v-bind:to="'/product/' + product.id">
                      <h5>{{ product.displayName }}</h5>
                    </RouterLink>
                    <p>${{ product.price }}</p>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Drawer view cart -->
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
</template>

<script lang="ts">
import http from "@/api/request";
import "./product-detail.scss";
import Carousel from "../../components/carousel/Carousel.vue";
import Drawer from "../../components/drawer/Drawer.vue";

export default {
  data() {
    const getImgUrl = (i: number) => {
      return `../src/assets/images/products/product_${i + 1}.jpg`;
    };
    return {
      getImgUrl,
      productDetail: null,
      products: [],
      isVisibleDrawer: false,
    };
  },
  methods: {
    handleVisibleCart() {
      this.isVisibleDrawer = true;
    },
    handleCloseDrawer() {
      this.isVisibleDrawer = false;
    },
  },
  async created() {
    const products = await http.get("/api/products?page=1&size=8");
    this.products = products;
    const response = await http.get(`/api/products/${this.$route.params.id}`);
    this.productDetail = response;
    this.$watch(
      () => this.$route.params.id,
      async (value, _) => {
        const response = await http.get(`/api/products/${value}`);
        this.productDetail = response;
      }
    );
  },
  components: { Carousel, Drawer },
};
</script>

<style scoped>
/* For demo */
.ant-carousel :deep(.slick-dots) {
  position: relative;
  height: auto;
}
.ant-carousel :deep(.slick-slide img) {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}
.ant-carousel :deep(.slick-arrow) {
  display: none !important;
}
.ant-carousel :deep(.slick-thumb) {
  bottom: -10px;
}
.ant-carousel :deep(.slick-thumb li) {
  width: 100px;
  height: 80px;
}
.ant-carousel :deep(.slick-thumb li img) {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  display: block;
}
.ant-carousel :deep .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
/*  */
</style>
