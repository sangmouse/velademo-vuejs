<template>
  <div>
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
              <RouterLink to="/">Products</RouterLink>
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
        <button type="button" class="btn-burger" v-on:click="handleVisibleMenu">
          <span>
            <img src="../../assets/images/menu-burger.png" alt="btn-burger" />
          </span>
        </button>
      </div>
    </div>
    <Drawer
      :isVisible="isVisible"
      class="menu-drawer"
      title="Menu Mobile"
      width="50%"
      placement="left"
      @handleClose="handleClose"
    >
      <div id="menu-mobile">
        <div class="body">
          <div class="item">
            <RouterLink to="/"><p>Products</p></RouterLink>
          </div>
          <div class="item">
            <RouterLink to="/user"><p>User</p></RouterLink>
          </div>
          <div class="item">
            <RouterLink to="/cart"><p>Cart</p></RouterLink>
          </div>
        </div>
      </div>
    </Drawer>
  </div>
</template>

<script lang="ts">
import "./header.scss";
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    handleLogout() {
      this.$store.commit("LOGOUT");
      if (!this.$store.state.auth.isLogin) {
        this.$router.push("/login");
      }
    },
  },
};
import Drawer from "../../components/drawer/Drawer.vue";
export default {
  components: {
    Drawer,
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    handleVisibleMenu() {
      this.isVisible = true;
    },
    handleClose() {
      this.isVisible = false;
    },
  },
};
</script>
