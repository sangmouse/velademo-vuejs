<template>
  <div id="add-product">
    <div class="container">
      <p v-if="message.length" class="message">{{ message }}</p>
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
            type="number"
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
            :options="categories"
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
          accept=".jpg, .jpeg, .png"
          list-type="picture"
          :multiple="true"
          :before-upload="beforeUpload"
          class="avatar-uploader"
          @remove="handleRemove"
        >
          <p style="margin: 0 0 10px 0">
            <span
              style="
                display: inline-block;
                margin: 0 5px 0 0;
                vertical-align: middle;
              "
              ><img
                src="../../../assets/images/asterik.png"
                width="5"
                alt="asterik" /></span
            >Upload Photo
          </p>
          <div class="upload-file">
            <div class="img">
              <img src="../../../assets/images/cloud-upload.png" alt="icon" />
            </div>
            <p>Click to upload images</p>
          </div>
        </a-upload>
        <p style="color: red">{{ msgUpload }}</p>

        <a-form-item>
          <p style="text-align: center">
            <a-button
              type="primary"
              html-type="submit"
              class="btn-create-product"
              ><sync-outlined spin v-if="loading" />Create New</a-button
            >
          </p>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">
import http from "@/api/request";
import type { UploadChangeParam, UploadProps } from "ant-design-vue";
import { computed, defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { SyncOutlined } from "@ant-design/icons-vue";
import requestUnauthorized from "@/api/request";
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
  components: {
    SyncOutlined,
  },

  async created() {
    try {
      const response = await requestUnauthorized.get("/api/categories");
      console.log(response);
      this.categories = response?.map((item) => ({
        value: item.id,
        label: item.name,
      }));
    } catch (error) {
      console.log(error);
    }
  },
  setup() {
    const msgUpload = ref<string>("");
    const categories = ref<any>([]);
    const loading = ref<boolean>(false);
    const fileList = ref<any>([]);
    const message = ref<string>("");
    const router = useRouter();
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
      if (!!fileList.value.length) {
        msgUpload.value = "";
      }
      return false;
    };

    const handleRemove: UploadProps["onRemove"] = (file) => {
      const index = fileList.value.indexOf(file);
      const newFileList = fileList.value.slice();
      newFileList.splice(index, 1);
      fileList.value = newFileList;
    };

    const onFinish = (values) => {
      if (!fileList.value.length) {
        msgUpload.value = "This field is required";
      } else {
        loading.value = true;
        const formData = new FormData();
        fileList.value.forEach((file: any) => {
          formData.append("files", file?.originFileObj as any);
        });
        const jsonFile = {
          displayName: values?.name?.trim(),
          price: values?.price?.trim(),
          description: values?.description?.trim(),
          categories: values?.categories,
        };
        const postData = JSON.stringify(jsonFile);
        formData.append("jsonFile", postData);
        requestUnauthorized
          .post("/api/admin/addProduct", formData)
          .then((res) => {
            setTimeout(() => {
              loading.value = false;
              message.value = "Create product successfully!";    
            }, 500);
            setTimeout(() => {
              router.push({
                name: "home-page",
              });
            }, 2000);
          })
          .catch((err) => {
            setTimeout(() => {
              loading.value = false;
            }, 500);
          });
      }
    };

    const onFinishFailed = (errorInfo: any) => {
      if (!fileList.value.length) {
        msgUpload.value = "This field is required";
      }
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
      message,
      beforeUpload,
      handleRemove,
      filteredOptions,
      loading,
      fileList,
      msgUpload,
      categories,
    };
  },
});
</script>
