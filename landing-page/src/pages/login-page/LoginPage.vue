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
              <p>Incorrect email or password!.</p>
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
                  v-on:click="handleSubmitForm"
                  class="signin-btn"
                />
              </div>
            </div>
          </div>

          <div class="register-content" v-if="this.numLogin === 2">
            <div class="register-alert__error register-alert__error--active">
              <p>Check again please!</p>
            </div>
            <div
              class="register-alert__success register-alert__success--active"
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
                  v-bind:type="showPassword ? 'text' : 'password'"
                  class="form-control register-password-control"
                  required
                  placeholder="Password"
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
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {request} from "@/api/request";
import { useRouter } from "vue-router";
import "./login.scss";
export default {

  data() {
    return {
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
  created() {
    if (localStorage.getItem("token") !== null) {
      this.router.push("/");
    } else {
      this.router.push("/account/login");
    }
  },
  methods: {
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

    async handleSubmitForm() {
      const data = this.login;
      if (
        data.email == "" ||
        data.password == "" ||
        !this.validateEmail(data.email)
      ) {
        this.message.error = true;
        this.message.success = false;
      } else {
        this.message.success = true;
        this.message.error = false;
        try {
          const response = await request.post(
            "https://api.dev.dentity.com/core/api/v1/admin/login",
            {
              email: data.email,
              password: data.password,
            }
          );
          localStorage.setItem("token", response.data.data.token);
          this.router.push("/");
        } catch (err) {
          console.log("khong dang nhap dc");
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
  },
};
</script>

<style scoped></style>
