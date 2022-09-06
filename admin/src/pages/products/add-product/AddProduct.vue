<template>
  <div id="add-product">
    <div class="container">
      <a-form
        :model="formState"
        name="basic"
        layout="vertical"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="Product Name"
          name="name"
          :rules="[{ required: true, message: 'This field is required' }]"
        >
          <a-input
            v-model:value="formState.name"
            placeholder="Enter product name"
          />
        </a-form-item>
        <a-form-item
          label="Product Price"
          name="price"
          :rules="[{ required: true, message: 'This field is required' }]"
        >
          <a-input
            v-model:value="formState.price"
            placeholder="Enter product price"
          />
        </a-form-item>

        <a-form-item
          name="categories"
          label="Categories"
          :rules="[
            {
              required: true,
              message: 'This field is required',
              type: 'array',
            },
          ]"
        >
          <a-select
            mode="multiple"
            placeholder="Select category"
            v-model:value="formState.categories"
          >
            <a-select-option
              v-for="category in [
                { value: '1', label: 'Blue' },
                { value: '2', label: 'Green' },
                { value: '3', label: 'Lightblue' },
              ]"
              :value="category.value"
              >{{ category.label }}</a-select-option
            >
          </a-select>
        </a-form-item>

        <a-form-item
          label="Product Description"
          name="description"
          :rules="[{ required: true, message: 'This field is required' }]"
        >
          <a-textarea
            v-model:value="formState.description"
            placeholder="Enter product description"
            :rows="4"
          />
        </a-form-item>

        <a-upload
          v-model:file-list="fileList"
          name="avatar"
          list-type="picture-card"
          class="avatar-uploader"
          :show-upload-list="false"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :before-upload="beforeUpload"
          @change="handleChange"
        >
          <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
          <div v-else>
            <loading-outlined v-if="loading"></loading-outlined>
            <plus-outlined v-else></plus-outlined>
            <div class="ant-upload-text">Upload</div>
          </div>
        </a-upload>
        <!-- <p style="margin: -20px 0 0 0; color: #ff4d4f">
          This field is required
        </p> -->

        <a-form-item>
          <p style="text-align: center">
            <a-button
              type="primary"
              html-type="submit"
              class="btn-create-product"
              >Create New</a-button
            >
          </p>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">
import type { UploadChangeParam, UploadProps } from "ant-design-vue";
import { defineComponent, reactive, ref } from "vue";
import "./add-product.scss";

interface FormState {
  name: string;
  price: string;
  description: string;
  categories: string[];
}

function getBase64(img: Blob, callback: (base64Url: string) => void) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
}

export default defineComponent({
  setup() {
    const fileList = ref([]);
    const loading = ref<boolean>(false);
    const imageUrl = ref<string>("");
    const formState = reactive<FormState>({
      name: "",
      price: "",
      description: "",
      categories: [],
    });

    // const beforeUpload: UploadProps["beforeUpload"] = (file) => {
    //   formState.dragger = [...formState.dragger, file];
    //   console.log(formState);

    //   return false;
    // };
    const handleChange = (info: UploadChangeParam) => {
      // console.log(info);

      if (info.file.status === "uploading") {
        loading.value = true;
        return;
      }
      if (info.file.status === "done") {
        // console.log(info);

        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (base64Url: string) => {
          imageUrl.value = base64Url;
          loading.value = false;
          console.log(imageUrl);
        });
      }
      if (info.file.status === "error") {
        loading.value = false;
        // message.error("upload error");
      }
    };
    const onFinish = (values: any) => {
      console.log("Success:", values, imageUrl.value);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
      imageUrl,
      handleChange,
      fileList,
    };
  },
});
</script>
