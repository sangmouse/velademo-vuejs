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
                  this.numLogin == 2 ? 'account-nav-login__title--active' : ''
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
                    ? 'account-nav-createAccount__title--active'
                    : ''
                "
              >
                Create Account
              </h4>
            </div>
          </div>
          <div class="account-main">
            <div class="account-content" v-if="this.numLogin == 1">
              <div class="account-alert__error account-alert__error--active">
                <p class="account-error-text">Incorrect email or password.</p>
              </div>
              <div
                class="account-alert__success account-alert__success--active"
              >
                <p class="account-success-text">Successfully</p>
              </div>
              <form action="">
                <div class="account-email">
                  <input
                    type="email"
                    class="form-control account-email-control"
                    required
                    placeholder="Email"
                  />
                </div>
                <div class="account-password">
                  <input
                    type="password"
                    class="form-control account-password-control"
                    required
                    placeholder="Password"
                  />
                  <div class="account-password__showbtn">
                    <span class="showbtn">Show</span>
                  </div>
                </div>
                <div class="account-signin-btn">
                  <input type="submit" value="Sign In" class="signin-btn" />
                </div>
              </form>
            </div>

            <div class="register-content" v-if="this.numLogin == 2">
              <div class="register-alert__error register-alert__error--active">
                <p class="register-error-text">Email has been used</p>
              </div>
              <div
                class="register-alert__success register-alert__success--active"
              >
                <p class="register-success-text">Create account successfully</p>
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
                    class="form-control register-lasttname-control"
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
                    v-bind:type=" showPassWord ? 'text' : 'password'"
                    class="form-control register-password-control"
                    required
                    placeholder="Password"
                  />
                  <div
                    class="register-password__showbtn"
                    @click="handleShowpassWord"
                  >
                    <span class="showbtn">Show</span>
                  </div>
                </div>
                <div class="register-signin-btn">
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
      console.log(this.ispassword);
    },
  },
  computed:{
    showPassWord(){
        return this.ispassword
    }
  }
};
</script>

<style lang="scss" scoped>
:root {
  --vela-color-primary: #ba933e;
  --vela-color-secondary: #ba933e;
  --vela-border-color: #e1e1e1;
  --vela-text-color-primary: #444444;
  --vela-font-family: "Red Hat Display", sans-serif;
  --vela-font-size: 16px;
  --vela-text-color-secondary: #1a1a1a;
}

html {
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--vela-font-family);
  font-size: var(--vela-font-size);
  line-height: 24px;
  color: var(--vela-text-color-primary);
  font-weight: 400;
}

* {
  box-sizing: border-box;
}

*::before,
*::after {
  box-sizing: inherit;
}

.vela-container {
  padding: 50px 0;
}

.form-account {
  margin: 0 auto;
  max-width: 600px;
  border-radius: 3px;
  box-shadow: 0 2px 2px #00000024, 0 1px 5px #0000001f, 0 3px 1px -2px #0003;
}

.account-nav {
  display: flex;
  width: 100%;
  height: 60px;
}

.account-nav-login {
  flex: 1;
  cursor: pointer;
}

.account-nav-login__title {
  padding: 20px 0;
  color: var(--vela-text-color-primary);
  background-color: #ebebeb;
  line-height: 20px;
  text-align: center;
  font-size: calc(var(--vela-font-size) + 2px);
  -webkit-transition: all 0.35s ease;
  -o-transition: all 0.35s ease;
  transition: all 0.35s ease;
  font-weight: 700;
}

.account-nav-login__title--active,
.account-nav-createAccount__title--active {
  background-color: #fff !important;
}

.account-nav-createAccount {
  flex: 1;
  cursor: pointer;
}

.account-nav-createAccount__title {
  padding: 20px 0;
  color: var(--vela-text-color-primary);
  background-color: #ebebeb;
  line-height: 20px;
  text-align: center;
  font-size: calc(var(--vela-font-size) + 2px);
  -webkit-transition: all 0.35s ease;
  -o-transition: all 0.35s ease;
  transition: all 0.35s ease;
  font-weight: 700;
}

.account-main {
  padding: 30px;
}

.account-content {
  display: block;
}

.account-content--active {
  display: block;
}

.account-alert__error,
.register-alert__error {
  background-color: #e26868;
  margin-bottom: 30px;
  display: none;
}

//  .account-alert__error--active {
//     display: block;
// }

/* .register-alert__error--active {
    display: block;
} */

.account-alert__success,
.register-alert__success {
  background-color: #5cb85c;
  margin-bottom: 30px;
  display: none;
}

/* .account-alert__success--active {
    display: block;
} */

/* .register-alert__success--active {
    display: block;
} */

.account-error-text,
.account-success-text,
.register-error-text,
.register-success-text {
  color: #fff;
  margin: 0;
  padding: 8px 10px;
}

.account-email,
.register-email {
  margin-bottom: 30px;
  border: 1px solid var(--vela-border-color);
  border-radius: 3px;
}

.form-control {
  border: none !important;
  padding-left: 8px;
}

.form-control:focus {
  box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 0%) !important;
}

.account-password-control {
  font: small-caption;
  font-size: 16px;
}

.account-password,
.register-password {
  margin-bottom: 30px;
  display: flex;
  border: 1px solid var(--vela-border-color);
  border-radius: 3px;
}

.account-password__showbtn,
.register-password__showbtn {
  cursor: pointer;
}

::placeholder {
  font-family: var(--vela-font-family);
  color: rgb(168, 168, 168) !important;
}

.showbtn {
  display: block;
  margin: 5px 0px 5px 5px;
  border-left: 1px solid var(--vela-border-color);
  width: 65px;
  text-align: center;
}

.signin-btn,
.create-account-btn {
  width: 100%;
  height: 46px;
  padding: 10px 30px;
  border-radius: 3px;
  text-align: center;
  display: inline-block;
  padding: 8px 30px;
  color: #fff;
  background-color: #1a1a1a;
  border: 0px solid #1a1a1a;
  font-size: calc(var(--vela-font-size) - 2px);
  font-weight: 700;
  line-height: 24px;
  border-radius: 3px;
  -webkit-transition: all 0.35s ease;
  -o-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.signin-btn:hover,
.create-account-btn:hover {
  background-color: var(--vela-color-primary);
}

.register-content {
  display: block;
}

.register-name {
  display: flex;
  margin-bottom: 30px;
}

.register-firstname-control,
.register-lasttname-control {
  border: 1px solid var(--vela-border-color) !important;
  border-radius: 3px !important;
}

.register-firstname-control {
  margin-right: 15px;
}

.register-lasttname-control {
  margin-left: 15px;
}

.register-lasttname-control {
}

@media (max-width: 576px) {
  ::placeholder {
    font-size: 14px;
  }
}
</style>
