<template>
  <div id="login-page">
    <div class="body">
      <div class="overlay"></div>
      <div class="image"></div>
      <div class="form-login">
        <h2>Welcome to Velademo</h2>
        <p>Please sign-in to your account and start the adventure</p>
        <div class="account-placeholder">
          <b>Admin: </b> admin@demo.com | admin
        </div>
        <div
          class="account-alert__error"
          :class="errorMessage.length == 0 ? '' : 'account-alert__error--active'"
        >
          <p>{{ errorMessage }}</p>
        </div>
        <a-form
          :model="formState"
          name="basic"
          layout="vertical"
          autocomplete="off"
          @finish="onFinish"
          class="login-form"
          @finishFailed="onFinishFailed"
        >
          <a-form-item
            label="Email"
            name="email"
            :rules="[{ required: true, message: 'This field is required' }]"
          >
            <a-input
              v-model:value="formState.email"
              placeholder="Enter your email"
            />
          </a-form-item>

          <a-form-item
            label="Password"
            name="password"
            :rules="[{ required: true, message: 'This field is required' }]"
          >
            <a-input-password
              v-model:value="formState.password"
              placeholder="Enter your password"
            />
          </a-form-item>

          <a-form-item>
            <a-button type="primary" html-type="submit">Sign In</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
import "./login.scss";
import router from "@/router";
export default {
  data() {
    return {
      errorMessage: '',
      formState: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async onFinish(values) {
      await this.$store.dispatch("loginSuccess", values);
      if (this.$store.state.auth.isLogin) {
        this.$router.push("/");
      }
    },
    onFinishFailed(errorInfo) {
      console.log("Failed:", errorInfo);
    },
  },
  computed: {
    errorMessage(){
      return this.errorMessage = this.$store.state.auth.error_message
    },
  },
};
</script>
