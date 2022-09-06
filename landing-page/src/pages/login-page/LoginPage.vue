<template>
  <div id="authen-page">
    <div class="container">
      <div class="account">
        <div class="account-nav">
          <div class="account-nav-login" @click="handleLogin('login')">
            <h4
              class="account-nav-login__title"
              v-bind:class="
                statusLogin === 'login'
                  ? 'account-nav-login__title--active'
                  : ''
              "
            >
              Login
            </h4>
          </div>
          <div class="account-nav-create" @click="handleLogin('register')">
            <h4
              class="account-nav-create__title"
              v-bind:class="
                statusLogin === 'register'
                  ? 'account-nav-create__title--active'
                  : ''
              "
            >
              Create Account
            </h4>
          </div>
        </div>
        <div class="account-main">
          <div class="account-content" v-if="statusLogin === 'login'">
            <div
              class="account-alert__error"
              :class="errorMessage ? 'account-alert__error--active' : ''"
            >
            <p v-if="messageErrorLogin.length > 0">{{ this.messageErrorLogin }}</p>
            </div>
            <div
              class="account-alert__success"
              :class="successMessage ? 'account-alert__success--active' : ''"
            >
              <p>Successfully!</p>
            </div>
            <div>
              <div class="account-email">
                <input
                  type="email"
                  class="form-control account-email-control"
                  required
                  autofocus
                  placeholder="Email"
                  v-on:change="onChangeEmail"
                />
              </div>
              <div class="account-password">
                <input
                  v-bind:type="showPassword ? 'text' : 'password'"
                  class="form-control account-password-control"
                  required
                  placeholder="Password"
                  v-on:change="onChangePassword"
                />
                <div
                  class="account-password__showbtn"
                  @click="handleShowPassword"
                >
                  <span class="showbtn" v-if="isPassword">Hide </span>
                  <span class="showbtn" v-if="!isPassword">Show</span>
                </div>
              </div>
              <div class="account-signin-btn">
                <input
                  type="button"
                  value="Sign In"
                  v-on:click="handleSubmitLogin"
                  class="signin-btn"
                />
              </div>
            </div>
          </div>

          <div class="register-content" v-if="statusLogin === 'register'">
            <div
              class="register-alert__error"
              :class="
                errorMessageRegister ? 'register-alert__error--active' : ''
              "
            >
              <p v-if="messageErrorRegister.length > 0">{{ this.messageErrorRegister }}</p>
            </div>
            <div
              class="register-alert__success"
              :class="
                successMessageRegister ? 'register-alert__success--active' : ''
              "
            >
              <p>Create account successfully!</p>
            </div>

            <div>
              <div class="register-name">
                <input
                  type="text"
                  class="form-control register-name-control"
                  placeholder="Full Name"
                  required
                  autofocus
                  @change="handleName"
                />
              </div>
              <div class="register-email">
                <input
                  type="email"
                  class="form-control register-email-control"
                  required
                  placeholder="Email"
                  v-on:change="onChangeEmailRegister"
                />
              </div>
              <div class="register-password">
                <input
                  v-bind:type="showPassword ? 'text' : 'password'"
                  class="form-control register-password-control"
                  required
                  placeholder="Password"
                  v-on:change="onChangePasswordRegister"
                />
                <div
                  class="register-password__showbtn"
                  @click="handleShowPassword"
                >
                  <span class="showbtn" v-if="isPassword">Hide</span>
                  <span class="showbtn" v-if="!isPassword">Show</span>
                </div>
              </div>
              <div class="register-confirm-password">
                <input
                  type="password"
                  class="form-control register-confirm-password-control"
                  placeholder="Confirm Password"
                  v-on:change="onChangeConfirmPassword"
                />
              </div>
              <div class="register-create-btn">
                <input
                  type="button"
                  value="Create Account"
                  class="create-account-btn"
                  v-on:click="handleSubmitRegister"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "./login.scss";
export default {
  data() {
    return {
      messageErrorLogin: "",
      messageErrorRegister: "",
      statusLogin: this.$store.state.auth.statusLogin,
      isPassword: true,
      login: {
        email: "",
        password: "",
      },
      message: {
        error: false,
        success: false,
      },
      messageRegister: {
        error: false,
        success: false,
      },
      register: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validateEmail(email) {
        if (
          String(email)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        ) {
          return true;
        } else {
          return false;
        }
      },
    };
  },

  watch: {
    statusLogin (newValue, oldValue) {
      this.messageErrorLogin = "";
      this.messageErrorRegister = "";
    }
  },


  methods: {
    //login methods

    handleLogin(status) {
      this.$store.commit("STATUS_LOGIN", status);
    },
    handleShowPassword() {
      this.isPassword = !this.isPassword;
    },
    onChangeEmail(e) {
      this.login.email = e.target.value;
    },
    onChangePassword(e) {
      this.login.password = e.target.value;
    },

    async handleSubmitLogin() {
      const data = this.login;
      const message = this.message;
      if (data.email == "") {
        this.messageErrorLogin = "Email must be not empty!";
        message.error = true;
        message.success = false;
      } else if (!this.validateEmail(data.email)) {
        this.messageErrorLogin = "Invalid email";
        message.error = true;
        message.success = false;
      } else if (data.password == "") {
        this.messageErrorLogin = "Password must be not empty!";
        message.error = true;
        message.success = false;
      } else {
        const infor = {
          email: data.email.trim(),
          password: data.password.trim(),
        };
        await this.$store.dispatch("getLogin", infor);
        if (!this.$store.state.auth.isLogin) {
          message.success = true;
          message.error = false;
          this.$router.push({
            name: "home",
          });
        } else {
          this.messageErrorLogin = this.$store.state.auth.messageErrorLogin;
          message.error = true;
        }
      }
    },

    //Register methods

    handleName(e) {
      this.register.name = e.target.value;
      console.log(this.register.name);
    },
    onChangeEmailRegister(e) {
      this.register.email = e.target.value;
    },
    onChangePasswordRegister(e) {
      this.register.password = e.target.value;
    },
    onChangeConfirmPassword(e) {
      this.register.confirmPassword = e.target.value;
    },
    handleSubmitRegister() {
      const data = this.register;
      const message = this.messageRegister;
      if (data.name === "") {
        this.messageErrorRegister = "Name must be not empty!";
        message.error = true;
        message.success = false;
      } else if (data.email === "") {
        this.messageErrorRegister = "Email must be not empty!";
        message.error = true;
        message.success = false;
      } else if (!this.validateEmail(data.email)) {
        this.messageErrorRegister = "Invalid email";
        message.error = true;
        message.success = false;
      } else if (data.password === "") {
        this.messageErrorRegister = "Password must be not empty!";
        message.error = true;
        message.success = false;
      } else if (data.confirmPassword != data.password) {
        this.messageErrorRegister = "Your confirmed password is incorect!";
        message.error = true;
        message.success = false;
      } else {
        this.messageRegister.error = false;
        this.messageRegister.success = true;
      }
    },
  },
  computed: {
    statusLogin() {
      return (this.statusLogin = this.$store.state.auth.statusLogin);
    },
    showPassword() {
      return this.isPassword;
    },
    errorMessage() {
      return this.message.error;
    },
    successMessage() {
      return this.message.success;
    },
    errorMessageRegister() {
      return this.messageRegister.error;
    },
    successMessageRegister() {
      return this.messageRegister.success;
    },
  },
};
</script>

<style scoped></style>
