<template>
  <div id="products">
    <div class="body">
      <h3 class="text-center">Trending Products</h3>
      <p class="text-center">Top view in this week</p>
      <div class="product-list">
        <div class="container">
          <div class="row">
            <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12" v-for="item in [1, 2, 3, 4, 5, 6, 7, 8]">
              <div class="product">
                <div class="action">
                  <button class="btn btn-add-cart">
                    <span>
                      <img src="../../assets/images/shopping-bag-16.png" alt="add-cart">
                    </span>
                  </button>
                  <button class="btn btn-view">
                    <span>
                      <img src="../../assets/images/search-b-16.png" alt="add-cart">
                    </span>
                  </button>
                </div>
                <RouterLink to="/products">
                  <div class="image">
                    <img src="../../assets/images/products/product_1.jpg" alt="product">
                  </div>
                </RouterLink>
                <RouterLink to="/">

                  <h6 class="name">Arctander Chair
                  </h6>
                </RouterLink>
                <div class="info">
                  <p class="price">$56.47</p>
                  <ul class="image-list">
                    <li>
                      <button type="button"></button>
                    </li>
                    <li>
                      <button type="button"></button>
                    </li>
                    <li>
                      <button type="button"></button>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script lang="ts">
import "./products.scss";
</script>