<template>
  <div id="product-detail">
    <div class="body">
      <div class="container">
        <div class="row">
          <div class="col-xxl-6">
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
                  <img :src="item" />
                </div>
              </a-carousel>
            </div>
          </div>
          <div class="col-xxl-6">
            <div class="info">
              <h2>Stainless steel teapot</h2>
              <p>
                Most of us are familiar with the iconic design of the egg shaped
                chair floating in the air. The Hanging Egg Chair is a critically
                acclaimed design that has enjoyed praise worldwide ever since
                the distinctive sculptural shape was created.
              </p>
              <h5>$56.80</h5>
              <div class="action">
                <div class="quantity">
                  <button class="btn">-</button>
                  <p>1</p>
                  <button class="btn">+</button>
                </div>
                <button class="btn-add-to-cart">
                  <p class="icon">
                    <img
                      src="../../assets/images/shopping-bag-w-24.png"
                      alt="shop-cart"
                    />
                  </p>
                  <div class="text-field">Add To Cart</div>
                </button>
              </div>
              <p class="category"><b>Categories: </b> <span>Decor</span></p>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import http from "@/api/request";
import "./product-detail.scss";

// const { id } = this.$route.params;

export default {
  data() {
    const getImgUrl = (i: number) => {
      return `../src/assets/images/products/product_${i + 1}.jpg`;
    };
    return {
      getImgUrl,
      productDetail: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    const response = await http.get(`/products/${id}`);

    this.productDetail = response;
    console.log(this.productDetail);
  },
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
</style>
