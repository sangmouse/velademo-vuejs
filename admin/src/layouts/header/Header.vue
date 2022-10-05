<template>
  <div>
    <div id="header">
      <div class="body">
        <div class="logo">
          <RouterLink to="/">
            <img src="../../assets/images/logo.png" alt="logo" />
          </RouterLink>
        </div>
        <!-- <div class="menus">
          <ul>
            <li>
              <RouterLink to="/">Products</RouterLink>
            </li>
          </ul>
        </div> -->
        <button type="button" class="profile" @click="handleLogout">
          <p>Sign out</p>
        </button>
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
            <!-- <RouterLink to="/"><p>Products</p></RouterLink> -->
            <button type="button" class="profile" @click="handleLogout">
              <p>Sign out</p>
            </button>
          </div>
          <!-- <div class="item">
            <RouterLink to="/user"><p>User</p></RouterLink>
          </div>
          <div class="item">
            <RouterLink to="/cart"><p>Cart</p></RouterLink>
          </div> -->
        </div>
      </div>
    </Drawer>
  </div>
</template>

<script lang="ts">
import { setJwtToken } from "@/utils/helpers";
import Drawer from "../../components/drawer/Drawer.vue";
import "./header.scss";
import { toastSuccess} from '@/utils/toast'
export default {
  name: "Header",
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
    handleLogout() {
      setJwtToken("");
      window.localStorage.setItem("logout", "false");
      this.$store.commit("LOGOUT");
      if (!this.$store.state.auth.isLogin) {
        this.$router.push("/login");
        toastSuccess('Logout Success')
      }
    },
  },
  components: { Drawer },
};
</script>
