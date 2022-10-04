<template>
  <div id="checkout">
    <div class="shopping">
      <router-link to="/" > <img src="https://cdn.shopify.com/s/files/1/0376/9440/6700/files/logo.png?6007" alt="" class="shopping-img" /></router-link>
      <div class="shopping-contact">
        <div class="shopping-contact-infor">Contact information</div>
      </div>
      <div>
        <a-input :value="useremail" placeholder="My email..." class="shopping-input" />
      </div>
      <div class="shopping-Shipping">Shipping address</div>
      <div>
        <a-input v-on:change="valuePhone" placeholder="Phone number" class="shopping-input" type="number" />
        <p class="shopping-requid " v-if="requidPhone">requid</p>
        <div class="shopping-container">
          <a-input v-model="valueFirstName" placeholder="First name" class="shopping-input" />
          <span></span>
          <a-input v-on:change="valueLastName" placeholder="Last name" class="shopping-input" />
        </div>
        <a-input v-on:change="valueAddress" placeholder="Address" class="shopping-input" />
        <p class="shopping-requid " v-if="requidAddress">requid</p>
        <a-input v-model="valueApartment" placeholder="Message to the shop..." class="shopping-input" />
      </div>
      <div class="shopping-continue">
        <div class="shopping-continue-return" @click="handleBack">
          <span class="shopping-continue-return_arrow">
            <left-outlined />
          </span> return to cart
        </div>
        <!-- <div class="shopping-continue-to">Continue to shipping</div> -->
        <div class="shopping-continue-to" @click="handleSubmit">
          <a-space style="background-color: transparent ;">
            <a-button type="primary" :loading="iconLoading" class="shopping-continue-to-buy">Buying</a-button>
          </a-space>
        </div>
      </div>
    </div>
    <div class="cart">
      <div class="cart-box">
        <ul class="cart-box-product">
          <li class="cart-box-product-list" v-for="item in products" :key="id">
            <div class="cart-box-product-list-img">
              <img :src="item.listImg[0].url" alt="" />
              <span>{{item.quantity}}</span>
            </div>
            <p class="cart-box-product-list-name">{{item.name}}</p>
            <p class="cart-box-product-list-price">{{item.price}} $</p>
          </li>
        </ul>
      </div>
      <div class="cart-total">
        <p class="cart-total-title">Total</p>
        <p class="cart-total-price">{{totalCoin}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import "./checkout.scss";
import { RightOutlined, LeftOutlined } from "@ant-design/icons-vue";
import { getUserCart } from '@/utils/helpers'
import { PoweroffOutlined } from '@ant-design/icons-vue';
import { toastSuccess } from '@/utils/toast'
import { formatNumber } from '@/utils/common'

export default {
  data() {
    return {
      useremail: getUserCart(),
      products: [],
      iconLoading: false,
      cartEmpty: [],
      requidPhone: false,
      requidAddress: false,
      valuePhone1: '',
      valueAddress1: '',
    };
  },
  created() {
    this.products = this.$store.state.cart.cart
  },
  computed: {
    products() {
      return this.$store.state.cart.cart
    },
    totalCoin() {
      const total = this.products.map((item) => item.quantity * item.price);
      const number = total.reduce((total, currentValue) => { return total + currentValue }, 0).toFixed(2);
      return formatNumber(number)
    },
  },
  methods: {
    valuePhone(e) {
      this.valuePhone1 = e.target.value
    },
    valueAddress(e) {
      this.valueAddress1 = e.target.value
    },
    handleBack() {
      this.$router.push('/')
      this.$store.commit("ISVISIBLE_CART");
    },
    handleSubmit() {
      if (this.valuePhone1 === "") {
        this.requidPhone = true
      } else if (this.valueAddress1 === "") {
        this.requidAddress = true
      } else {
        this.iconLoading = true;
        setTimeout(async () => {
          toastSuccess("Buy Success")
          await this.$store.dispatch('updateCart', this.cartEmpty);
          await this.$store.dispatch("updateCartCurrent");
          this.$router.push("/")
        }, 1000)
      }
    },
  },
  components: { RightOutlined, LeftOutlined, PoweroffOutlined, },
};
</script>
  
<style>

</style>