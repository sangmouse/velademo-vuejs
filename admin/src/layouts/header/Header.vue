<template>
  <div id="header">
    <div class="body">
      <div class="logo">
        <RouterLink to="/">
          <img src="../../assets/images/logo.png" alt="logo" />
        </RouterLink>
      </div>
      <div class="menus">
        <ul>
          <li>
            <RouterLink to="/products">Products</RouterLink>
          </li>
          <li>
            <RouterLink to="/user">User</RouterLink>
          </li>
          <li>
            <RouterLink to="/cart">Cart</RouterLink>
          </li>
        </ul>
      </div>
      <div class="profile">
        <RouterLink to="/sign-out">
          <p>Sign out</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "./header.scss";
</script>
