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
            :options="
              filteredOptions.map((item) => ({
                value: item.value,
                label: item.label,
              }))
            "
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
          accept=".jpg, .jpeg, .png"
          list-type="picture"
          :multiple="true"
          :before-upload="beforeUpload"
          class="avatar-uploader"
          @remove="handleRemove"
        >
          <div>
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
import { computed, defineComponent, reactive, ref } from "vue";
import "./add-product.scss";

interface FormState {
  name: string;
  price: string;
  description: string;
  categories: string[];
}

const OPTIONS = [
  { value: "1", label: "Blue" },
  { value: "2", label: "Green" },
  { value: "3", label: "Lightblue" },
];

export default defineComponent({
  setup() {
    const fileList = ref<any>([]);
    const formState = reactive<FormState>({
      name: "",
      price: "",
      description: "",
      categories: [],
    });
    const filteredOptions = computed(() =>
      OPTIONS.filter((o) => !formState.categories.includes(o.value))
    );

    const beforeUpload: UploadProps["beforeUpload"] = (file) => {
      fileList.value = [...fileList.value, file];
      return false;
    };

    const handleRemove: UploadProps["onRemove"] = (file) => {
      const index = fileList.value.indexOf(file);
      const newFileList = fileList.value.slice();
      newFileList.splice(index, 1);
      fileList.value = newFileList;
      console.log(fileList.value);
    };

    const onFinish = (values: any) => {
      const formData = new FormData();
      const categories = values.categories.map((item: any) => item);
      const images = fileList.value.forEach((file) => {
        formData.append("images", file as any);
      });
      console.log("Success:", {
        ...values,
        categories,
      });
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
      beforeUpload,
      handleRemove,
      filteredOptions,
      fileList,
    };
  },
});
</script>
