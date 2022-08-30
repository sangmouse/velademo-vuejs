<template>
  <main class="mainContent">
    <div class="container">
      <div class="vela-container">
        <div class="form-account">
          <div class="account-nav">
            <div class="account-nav-login" @click="handleLogin(1)">
              <h4
                class="account-nav-login__title"
                v-bind:class="
                  this.numLogin == 2 ? '' : 'account-nav-login__title--active'
                "
              >
                Login
              </h4>
            </div>
            <div class="account-nav-createAccount" @click="handleLogin(2)">
              <h4
                class="account-nav-createAccount__title"
                v-bind:class="
                  this.numLogin == 1
                    ? ''
                    : 'account-nav-createAccount__title--active'
                "
              >
                Create Account
              </h4>
            </div>
          </div>
          <div class="account-main">
            <div class="account-content" v-if="this.numLogin == 1">
              <div class="account-alert__error account-alert__error--active">
                <p>Incorrect email or password.</p>
              </div>
              <div
                class="account-alert__success account-alert__success--active"
              >
                <p>Successfully</p>
              </div>
              <form action="">
                <div class="account-email">
                  <input
                    type="email"
                    class="form-control account-email-control"
                    required
                    autofocus
                    placeholder="Email"
                  />
                </div>
                <div class="account-password">
                  <input
                    v-bind:type="showPassWord ? 'text' : 'password'"
                    class="form-control account-password-control"
                    required
                    placeholder="Password"
                  />
                  <div
                    class="account-password__showbtn"
                    @click="handleShowpassWord"
                  >
                    <span class="showbtn" v-if="ispassword">Hide </span>
                    <span class="showbtn" v-if="!ispassword">Show</span>
                  </div>
                </div>
                <div class="account-signin-btn">
                  <input type="submit" value="Sign In" class="signin-btn" />
                </div>
              </form>
            </div>

            <div class="register-content" v-if="this.numLogin == 2">
              <div class="register-alert__error register-alert__error--active">
                <p>Email has been used</p>
              </div>
              <div
                class="register-alert__success register-alert__success--active"
              >
                <p>Create account successfully</p>
              </div>

              <form action="">
                <div class="register-name">
                  <input
                    type="text"
                    class="form-control register-firstname-control"
                    placeholder="First Name"
                    required
                    autofocus
                  />
                  <input
                    type="text"
                    class="form-control register-lastname-control"
                    placeholder="Last Name"
                    required
                    autofocus
                  />
                </div>
                <div class="register-email">
                  <input
                    type="email"
                    class="form-control register-email-control"
                    required
                    placeholder="Email"
                  />
                </div>
                <div class="register-password">
                  <input
                    v-bind:type="showPassWord ? 'text' : 'password'"
                    class="form-control register-password-control"
                    required
                    placeholder="Password"
                  />
                  <div
                    class="register-password__showbtn"
                    @click="handleShowpassWord"
                  >
                    <span class="showbtn" v-if="ispassword">Hide</span>
                    <span class="showbtn" v-if="!ispassword">Show</span>
                  </div>
                </div>
                <div class="register-create-btn">
                  <input
                    type="submit"
                    value="Create Account"
                    class="create-account-btn"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import "./login.scss";
export default {
  data() {
    return {
      numLogin: 1,
      ispassword: true,
    };
  },
  methods: {
    handleLogin(value) {
      this.numLogin = value;
    },
    handleShowpassWord() {
      this.ispassword = !this.ispassword;
    },
  },
  computed: {
    showPassWord() {
      return this.ispassword;
    },
  },
};
</script>

<style scoped></style>
