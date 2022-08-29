<template>
  <div id="product-detail">
    <div class="product_img">
      <div class="CSSgal">
        <!-- Don't wrap targets in parent -->
        <s id="s1"></s>
        <s id="s2"></s>
        <s id="s3"></s>
        <s id="s4"></s>

        <div class="slider">
          <div style="background: #fff">
            <img
              style="width: 100%; height: 600px"
              src="https://cdn.shopify.com/s/files/1/0376/9440/6700/products/11_4_360x.jpg?v=1598084962"
              alt=""
            />
          </div>
          <div style="background: #fff">
            <img
              style="width: 100%; height: 600px"
              src="https://cdn.shopify.com/s/files/1/0376/9440/6700/products/1_2_360x.jpg?v=1586244828"
              alt=""
            />
          </div>
          <div style="background: #fff">
            <img
              style="width: 100%; height: 600px"
              src="https://cdn.shopify.com/s/files/1/0376/9440/6700/products/30_1_360x.jpg?v=1586316781"
              alt=""
            />
          </div>
          <div style="background: #fff">
            <img
              style="width: 100%; height: 600px"
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
            <span class="product_infor-cart_addtocart"> Add To Cart</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "./ProductDetail.scss";

export default {
  name: "ProductDetail",
};
</script>

<style  scoped>
/* AAAAAAAAAAAAAAAA */

/* *{box-sizing: border-box; -webkit-box-sizing: border-box; }
html, body { height: 100%; }
body { margin: 0; font: 16px/1.3 sans-serif; } */

/*
PURE RESPONSIVE CSS3 SLIDESHOW GALLERY by Roko C. buljan
http://stackoverflow.com/a/34696029/383904
*/

.CSSgal {
  position: relative;
  overflow: hidden;
  height: 100%; /* Or set a fixed height */
}

/* SLIDER */

.CSSgal .slider {
  height: 100%;
  white-space: nowrap;
  font-size: 0;
  transition: 0.8s;
}

/* SLIDES */

.CSSgal .slider > * {
  font-size: 1rem;
  display: inline-block;
  white-space: normal;
  vertical-align: top;
  height: 100%;
  width: 100%;
  background: none 50% no-repeat;
  background-size: cover;
}

/* PREV/NEXT, CONTAINERS & ANCHORS */

.CSSgal .bullets > a {
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-decoration: none;
  text-align: center;
  background: rgba(255, 255, 255, 1);
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
prevNext {
  position: absolute;
  z-index: 1;
  top: 50%;
  width: 100%;
  height: 0;
}

.CSSgal .prevNext > div + div {
  visibility: hidden; /* Hide all but first P/N container */
}

.CSSgal .prevNext a {
  background: #fff;
  position: absolute;
  width: 60px;
  height: 60px;
  line-height: 60px; /* If you want to place numbers */
  text-align: center;
  opacity: 0.7;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 0;
}
.CSSgal .prevNext a:hover {
  opacity: 1;
}
.CSSgal .prevNext a + a {
  left: auto;
  right: 0;
}

/* NAVIGATION */

.CSSgal .bullets {
  position: absolute;
  z-index: 2;
  bottom: 0;
  padding: 10px 0;
  width: 100%;
  text-align: center;
}
.CSSgal .bullets > a {
  display: inline-block;
  width: 50px;
  height: 50px;
  /* line-height: 30px; */
  text-decoration: none;
  text-align: center;
  background: rgba(255, 255, 255, 1);
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.CSSgal .bullets > a > img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.CSSgal .bullets > a + a {
  background: rgba(255, 255, 255, 0.5); /* Dim all but first */
}
.CSSgal .bullets > a:hover {
  background: rgba(255, 255, 255, 0.7) !important;
}

/* NAVIGATION BUTTONS */
/* ALL: */
.CSSgal > s:target ~ .bullets > * {
  background: rgba(255, 255, 255, 0.5);
}
/* ACTIVE */
#s1:target ~ .bullets > *:nth-child(1) {
  background: rgba(255, 255, 255, 1);
}
#s2:target ~ .bullets > *:nth-child(2) {
  background: rgba(255, 255, 255, 1);
}
#s3:target ~ .bullets > *:nth-child(3) {
  background: rgba(255, 255, 255, 1);
}
#s4:target ~ .bullets > *:nth-child(4) {
  background: rgba(255, 255, 255, 1);
}
/* More slides? Add here more rules */

/* PREV/NEXT CONTAINERS VISIBILITY */
/* ALL: */
/* .CSSgal >s:target ~ .prevNext >* {      visibility: hidden;} */
/* ACTIVE: */
/* #s1:target ~ .prevNext >*:nth-child(1) {visibility: visible;} */
/* #s2:target ~ .prevNext >*:nth-child(2) {visibility: visible;} */
/* #s3:target ~ .prevNext >*:nth-child(3) {visibility: visible;} */
/* #s4:target ~ .prevNext >*:nth-child(4) {visibility: visible;} */
/* More slides? Add here more rules */

/* SLIDER ANIMATION POSITIONS */

#s1:target ~ .slider {
  transform: translateX(0%);
  -webkit-transform: translateX(0%);
}
#s2:target ~ .slider {
  transform: translateX(-100%);
  -webkit-transform: translateX(-100%);
}
#s3:target ~ .slider {
  transform: translateX(-200%);
  -webkit-transform: translateX(-200%);
}
#s4:target ~ .slider {
  transform: translateX(-300%);
  -webkit-transform: translateX(-300%);
}
/* More slides? Add here more rules */

/* YOU'RE THE DESIGNER! 
   ____________________
   All above was mainly to get it working :)
   CSSgal CUSTOM STYLES / OVERRIDES HERE: */

.CSSgal {
  color: #fff;
  text-align: center;
}
.CSSgal .slider h2 {
  margin-top: 40vh;
  font-weight: 200;
  letter-spacing: -0.06em;
  word-spacing: 0.2em;
  font-size: 3em;
}
.CSSgal a {
  border-radius: 50%;
  margin: 0 3px;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
}


@media screen and (max-width: 767px) {
  .product_infor-cart_addtocart {
    display: none;
  }
  .product-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .container {
    padding: 0;
  }
  .product_img {
    width: 100%;
  }
  .product_infor {
    width: 100%;
    padding-top: 20px;
  }
  .product_more-slide-page-item-price {
    flex-direction: column;
    align-items: center;
  }
  .display-none_maxwidth767px {
    display: none;
  }
  .product_more-slide-page-item {
    width: 50%;
    position: relative;
    cursor: pointer;
  }
  .carousel-control-prev-icon {
    left: 0px;
  }
  .carousel-control-next-icon {
    right: 0px;
  }
}
@media screen and (max-width: 1023px) {
  .product_more-slide-page-item-price {
    display: flex;
    flex-direction: column;
  }
}
</style>

