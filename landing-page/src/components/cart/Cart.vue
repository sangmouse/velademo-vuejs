<template>
    <!-- v-if="isVisibleDrawer" -->
    <!-- @handle-close="handleCloseDrawer" -->
    <div
      class="view-cart-drawer"
      title="Shopping Cart"
    >
    <h1 class="ant-drawer-title">Shopping Cart</h1>
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
    </div>
</template>
<script>
    import "./cart.scss"
export default {
    data(){
        return{

        }
    },
    name:'Cart',
}
</script>
<style>

</style>