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
      <div class="profile"
      @click="handleLogout"
      >
          <p>Sign out</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "./header.scss";


export default {
  name:'Header',
  data(){
    return{

    }
  },
  methods: {
    handleLogout(){
    this.$store.commit('LOGOUT')
    if(!this.$store.state.auth.isLogin){
      this.$router.push('/login')
    }
    },
  },  
}

</script>
