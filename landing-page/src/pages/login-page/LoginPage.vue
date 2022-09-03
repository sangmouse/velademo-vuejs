<template>
  <div id="authen-page">
    <div class="container">
      <div class="account">
        <div class="account-nav">
          <div class="account-nav-login" @click="handleLogin(1)">
            <h4
              class="account-nav-login__title"
              v-bind:class="
                this.numLogin === 2 ? '' : 'account-nav-login__title--active'
              "
            >
              Login
            </h4>
          </div>
          <div class="account-nav-create" @click="handleLogin(2)">
            <h4
              class="account-nav-create__title"
              v-bind:class="
                this.numLogin === 1 ? '' : 'account-nav-create__title--active'
              "
            >
              Create Account
            </h4>
          </div>
        </div>
        <div class="account-main">
          <div class="account-content" v-if="this.numLogin === 1">
            <div
              class="account-alert__error"
              :class="errorMessage ? 'account-alert__error--active' : ''"
            >
              <p>{{ this.messageErrorLogin }}</p>
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

          <div class="register-content" v-if="this.numLogin === 2">
            <div
              class="register-alert__error"
              :class="errorMessager ? 'register-alert__error--active' : ''"
            >
              <p>Check again please!</p>
            </div>
            <div
              class="register-alert__success"
              :class="successMessager ? 'register-alert__success--active' : ''"
            >
              <p>Create account successfully!</p>
            </div>

            <div>
              <div class="register-name">
                <input
                  type="text"
                  class="form-control register-firstname-control"
                  placeholder="First Name"
                  required
                  autofocus
                  @change="handleFirstname"
                />
                <input
                  type="text"
                  class="form-control register-lastname-control"
                  placeholder="Last Name"
                  required
                  autofocus
                  @change="handleLastname"
                />
              </div>
              <div class="register-email">
                <input
                  type="email"
                  class="form-control register-email-control"
                  required
                  placeholder="Email"
                  v-on:change="onChangeEmailr"
                />
              </div>
              <div class="register-password">
                <input
                  v-bind:type="showPassword ? 'text' : 'password'"
                  class="form-control register-password-control"
                  required
                  placeholder="Password"
                  v-on:change="onChangePasswordr"
                />
                <div
                  class="register-password__showbtn"
                  @click="handleShowPassword"
                >
                  <span class="showbtn" v-if="isPassword">Hide</span>
                  <span class="showbtn" v-if="!isPassword">Show</span>
                </div>
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
import { useRouter } from "vue-router";
import "./login.scss";
export default {
  data() {
    return {
      messageErrorLogin: "",
      numLogin: 1,
      isPassword: true,
      login: {
        email: "",
        password: "",
      },
      message: {
        error: false,
        success: false,
      },
      messager: {
        error: false,
        success: false,
      },
      register: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
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
      router: useRouter(),
    };
  },
  methods: {
    handleFirstname(e) {
      this.register.firstname = e.target.value;
      console.log(this.register.firstname);
    },
    handleLastname(e) {
      this.register.lastname = e.target.value;
    },
    onChangePasswordr(e) {
      this.register.password = e.target.value;
    },
    onChangeEmailr(e) {
      this.register.email = e.target.value;
    },
    handleLogin(value) {
      this.numLogin = value;
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
    handleSubmitRegister() {
      const data = this.register;
      if (
        data.email == "" ||
        data.password == "" ||
        data.firstname == "" ||
        data.lastname == "" ||
        !this.validateEmail(data.email)
      ) {
        this.messager.error = true;
        this.messager.success = false;
      } else {
        this.messager.error = false;
        this.messager.success = true;
      }
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
        if (localStorage.getItem("token") !== null) {
          message.success = true;
          message.error = false;
          this.$router.push({
            name: "home",
          });
        } else {
          message.error = true;
        }
      }
    },
  },
  computed: {
    showPassword() {
      return this.isPassword;
    },
    errorMessage() {
      return this.message.error;
    },
    successMessage() {
      return this.message.success;
    },
    errorMessager() {
      return this.messager.error;
    },
    successMessager() {
      return this.messager.success;
    },
  },
};
</script>

<style scoped></style>
