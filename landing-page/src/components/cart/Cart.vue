<template>
  <a-drawer
    class="view-cart-drawer"
    title="Shopping Cart"
    placement="right"
    v-model:visible="visible"
    @close="handleCloseCart"
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
                <button class="btn btn-increment" @click="handleDiminishQty">-</button>
                <input class="quantity" v-model="quantity" />
                <button class="btn btn-increment" @click="handleInscreQty">+</button>
              </div>
            </div>
          </div>
          <button class="btn-remove"
          @click="handleDelete"
          >X</button>
        </div>
      </div>
      <div class="total-price">
        <p>Subtotal</p>
        <h5>$987.34</h5>
      </div>
      <p class="privacy">
        Shipping, taxes, and discounts will be calculated at checkout.
      </p>
      <button class="btn-view-cart">Update Cart</button>
    </div>
  </a-drawer>
</template>
  <script lang="ts">
import "./cart.scss";
export default {
    name:'Cart',
  data() {
    return {
      visible: false,
      quantity: 1,
    };
  },
  methods: {
    handleCloseCart(){
        this.$store.commit('CLOSE_CART')
    },
    handleDelete(){
      // console.log(status);
    },
    handleInscreQty(){
      this.quantity += 1 
    },
    handleDiminishQty(){
      this.quantity -= 1 
    }
  },
  computed:{
    visible(){
        return this.$store.state.cart.visibleCart
    },
    quantity(){
      if(this.quantity < 1 ){
        return this.quantity = 1
      }
      return this.quantity
    }
  }
};
</script>
  