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
                  <template #customPaging>
                    <a v-for="item in productDetail?.images" :key="item">
                      <img :src="url + item.url" />
                    </a>
                  </template>

                  <!-- <template #customPaging="props">
                    <a>
                      <img :src="getImgUrl(props.i)" />
                    </a>
                  </template> -->
                  <!-- <div v-for="item in 4" :key="item">
                    <img :src="getImgUrl(item)" />
                  </div> -->
                  <div v-for="item in productDetail?.images" :key="item">
                    <img :src="url + item.url" />
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
                    <button class="btn" @click="handleDiminishQty">-</button>
                    <p>{{ quantity }}</p>
                    <button class="btn" @click="handleInscreQty">+</button>
                  </div>
                  <button
                    class="btn-add-to-cart"
                    type="button"
                    @click="showCartDetail(productDetail?.id)"
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
                        @click="showCart(product.id)"
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
                          v-bind:src="url + product.images[0]?.url"
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
    <Cart />
  </div>
</template>

<script lang="ts">
import "./product-detail.scss";
import Carousel from "../../components/carousel/Carousel.vue";
import Drawer from "../../components/drawer/Drawer.vue";
import Cart from "../../components/cart/Cart.vue";
import requestUnauthorized from "@/api/request";

export default {
  data() {
    // const getImgUrl = (i: number) => {
    //   return `http://localhost:8081/api/image/downloadFile/product ${
    //     i + 1
    //   }.jpg`;
    // };
    return {
      i: 0,
      url: `http://localhost:8081/api/image/downloadFile/`,
      // getImgUrl,
      productDetail: null,
      products: [],
      isVisibleDrawer: false,
      quantity: 1,
    };
  },
  methods: {
    showCartDetail(id) {
      console.log(id);
      const index = this.products.findIndex((item) => item.id === id);
      const infor = this.products[index];
      const data = {
        listImg: infor.images,
        id: infor.id,
        name: infor.displayName,
        price: infor.price,
        quantity: this.quantity,
      };
      this.$store.commit("ADD_PRODUCT_DETAIL", {
        id: id,
        data: data,
      });
      this.$store.commit("ISVISIBLE_CART");
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
    handleCloseDrawer() {
      this.isVisibleDrawer = false;
    },
    handleInscreQty() {
      this.quantity += 1;
    },
    handleDiminishQty() {
      this.quantity -= 1;
    },
  },
  computed: {
    quantity() {
      if (this.quantity < 1) {
        return (this.quantity = 1);
      }
      return this.quantity;
    },
  },
  async created() {
    const products = await requestUnauthorized.get(
      "/api/products?page=1&size=8"
    );

    this.products = products;
    const response = await requestUnauthorized.get(
      `/api/product/${this.$route.params.id}`
    );
    if (response) {
      this.products.push(response);
    }
    this.productDetail = response;

    this.$watch(
      () => this.$route.params.id,
      async (value, _) => {
        const response = await requestUnauthorized.get(`/api/product/${value}`);
        this.productDetail = response;
        this.quantity = 1;
      }
    );
  },
  components: { Carousel, Drawer, Cart },
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
