<template>
  <div class="top-bar">
    <div class="top-bar-body">
      <div class="top-bar-body_info">
        <p class="call-in">
          <img alt="phone-outlined" src="../../assets/images/phone-outline.png" />
        </p>
        <p class="top-bar-body_phone-number ml-8 mr-8">
          +391 (0)35 2568 4593
        </p>
        <!-- <a-divider type="vertical" style="background: black;" /> -->
        <p class="top-bar-email-i mr-8"><img alt="phone-outlined" src="../../assets/images/envelope.png" /></p>
        <p class="top-bar-email">
          velatheme@gmail.com
        </p>
      </div>
      <p class="top-bar-body_sale">
        Free shipping on all orders over
        <u>$79</u>
        <RouterLink to="/products">shop Now!</RouterLink>
      </p>
      <div class="top-bar-body_social">
        <ul>
          <li class="item">
            <img alt="facebook" src="../../assets/images/facebook.png" />
          </li>
          <li class="item">
            <img alt="facebook" src="../../assets/images/instagram.png" />
          </li>
          <li class="item">
            <img alt="facebook" src="../../assets/images/twitter.png" />
          </li>
          <li class="item">
            <img alt="facebook" src="../../assets/images/pinterest.png" />
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="navigator">
    <div class="logo">
      <RouterLink to="/">
        <img src="../../assets/images/logo.png" alt="rubix">
      </RouterLink>
    </div>
    <ul class="menus">
      <li class="menu">
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li class="menu">
        <RouterLink to="/products">Shop</RouterLink>
      </li>
      <li class="menu">
        <RouterLink to="/products">Collections</RouterLink>
      </li>
      <li class="menu">
        <RouterLink to="/">Contact Us</RouterLink>
      </li>
    </ul>
    <ul class="user">
      <li class="profile">
        <p class="account">
          <RouterLink to="/">
            <img src="../../assets/images/user.png" alt="user-i" />
          </RouterLink>
        </p>
        <p class="link">
          <RouterLink to="/account/login">Login /</RouterLink>
          <RouterLink to="/account/register"> Sign up</RouterLink>
        </p>
      </li>
      <button class="btn-search" type="button" @click="handleOpenInputSearch">
        <img src="../../assets/images/search.png" alt="search-i">
      </button>
      <div class="search-top" v-if="isOpen">
       <form action="" class="search-top-form">
         <div class="search-top-form-group">
           <input type="text" placeholder="Enter keywords to search..." class="search-top-form-group__input form-control">
           <div class="search-top-form-group-addon">
             <button class="btn search-top-form-group-addon__btn" type="button" @click="handleOpenInputSearch">
               <img class="search-top-form-group-addon__img" src="../../assets/images/search.png" alt="search-i"/>
             </button>
           </div>
         </div>
       </form>
      </div>
      <button class="btn-shop-bag" type="button">
        <img src="../../assets/images/shopping-bag.png" alt="shop-bag">
        <small class="quantity">o</small>
      </button>

    </ul>
  </div>
</template>



<script lang="ts">
import "./header.scss";
export default {
  data(){
    return {
      isOpen: false 
    }
  },
  methods: {
    handleOpenInputSearch(){
      this.isOpen = !this.isOpen
    }
  }
}

</script>
