<template>
  <div id="login-page">
    <div class="body">
      <div class="image">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
        provident nemo quam voluptate impedit. Dolor, minima. Adipisci sequi ab
        fugiat repellendus praesentium consequatur, saepe ut aperiam delectus
        ratione, voluptatum eos.
      </div>
      <div class="form-login">
        <h2>Welcome to Velademo</h2>
        <p>Please sign-in to your account and start the adventure</p>
        <div class="account-placeholder">
          <b>Admin: </b> admin@demo.com | admin
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

<script lang="ts">
import { defineComponent, reactive } from "vue";
import "./login.scss";

interface FormState {
  email: string;
  password: string;
}

export default defineComponent({
  setup() {
    const formState = reactive<FormState>({
      email: "",
      password: "",
    });
    const onFinish = (values: any) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },
});
</script>
