<template>
  <div id="product-detail">
    <div class="product_img">
      <div class="productgal">
        <!-- Don't wrap targets in parent -->
        <s id="s1"></s>
        <s id="s2"></s>
        <s id="s3"></s>
        <s id="s4"></s>

        <div class="slider">
          <div class="slider-list">
            <img class="slider-list__img"
              src="https://cdn.shopify.com/s/files/1/0376/9440/6700/products/11_4_360x.jpg?v=1598084962"
              alt=""
            />
          </div>
          <div class="slider-list">
            <img class="slider-list__img"
              src="https://cdn.shopify.com/s/files/1/0376/9440/6700/products/1_2_360x.jpg?v=1586244828"
              alt=""
            />
          </div>
          <div class="slider-list">
            <img class="slider-list__img"
              src="https://cdn.shopify.com/s/files/1/0376/9440/6700/products/30_1_360x.jpg?v=1586316781"
              alt=""
            />
          </div>
          <div class="slider-list">
            <img class="slider-list__img"
              src="https://cdn.shopify.com/s/files/1/0376/9440/6700/products/14_360x.jpg?v=1586245038"
              alt=""
            />
          </div>
        </div>
        <div class="bullets">
          <a href="#s1"
            ><img
              src="https://cdn.shopify.com/s/files/1/0376/9440/6700/products/11_4_360x.jpg?v=1598084962"
              alt=""
          /></a>
          <a href="#s2"
            ><img
              src="https://cdn.shopify.com/s/files/1/0376/9440/6700/products/1_2_360x.jpg?v=1586244828"
              alt=""
          /></a>
          <a href="#s3"
            ><img
              src="https://cdn.shopify.com/s/files/1/0376/9440/6700/products/30_1_360x.jpg?v=1586316781"
              alt=""
          /></a>
          <a href="#s4"
            ><img
              src="https://cdn.shopify.com/s/files/1/0376/9440/6700/products/14_360x.jpg?v=1586245038"
              alt=""
          /></a>
        </div>
      </div>
    </div>
    <div class="product_infor">
      <h1 class="product_infor-name">Arctander Chair</h1>
      <p class="product_infor-description">
        Most of us are familiar with the iconic design of the egg shaped chair
        floating in the air. The Hanging Egg Chair is a critically acclaimed
        design that has enjoyed praise worldwide ever since the distinctive
        sculptural shape was created.
      </p>
      <div class="product_infor-color">
        <h4 class="product_infor-price">$39.000</h4>
        <div class="product_infor-cart">
          <div class="product_infor-cart_qty">
            <button>-</button>
            <input type="text" value="1" />
            <button>+</button>
          </div>
          <div class="product_infor-cart_add">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bag"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
              />
            </svg>
            <span class="product_infor-cart_addtocart">Add To Cart</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "./productDetail.scss";

export default {
  name: "ProductDetail",
};
</script>


