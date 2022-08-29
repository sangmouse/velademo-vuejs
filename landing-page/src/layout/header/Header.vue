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
      <button class="btn-search" type="button">
        <img src="../../assets/images/search.png" alt="search-i">
      </button>
      <button class="btn-shop-bag" type="button">
        <img src="../../assets/images/shopping-bag.png" alt="shop-bag">
        <small class="quantity">o</small>
      </button>

    </ul>
  </div>
</template>



<script lang="ts">
import "./header.scss";

</script>
