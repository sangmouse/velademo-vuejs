<template>
  <div class="blog-post-creator rteditor">
    <div class="post-inputs" @finish="onFinish">
      <div class="title-input">
        <a-form-item name="title">
          <a-input
            v-model:value="blogEdit.title"
            placeholder="Enter a post title"
          />
        </a-form-item>
      </div>
      <div class="cat-input">
        <a-select
          mode="multiple"
          placeholder="Select a category"
          v-model:value="categoriesItem"
        >
          <Option v-for="(cat, index) in categories" :key="index" :value="cat">
          </Option>
        </a-select>
      </div>
    </div>
    <QuillEditor
      ref="myQuillEditor"
      v-model="content"
      theme="snow"
      toolbar="#custom-toolbar"
    >
      <template #toolbar>
        <div id="custom-toolbar">
          <select class="ql-size">
            <option value="small"></option>
            <option selected></option>
            <option value="large"></option>
            <option value="huge"></option>
          </select>
          <select class="ql-header">
            <option :value="1"></option>
            <option :value="2"></option>
            <option :value="3"></option>
            <option :value="4"></option>
            <option :value="5"></option>
            <option :value="6"></option>
            <option selected></option>
          </select>
          <button class="ql-bold"></button>
          <button class="ql-italic"></button>
          <button class="ql-underline"></button>
          <button class="ql-strike"></button>
          <button class="ql-script" value="sub"></button>
          <button class="ql-script" value="super"></button>
          <select class="ql-align">
            <option selected></option>
            <option value="center"></option>
            <option value="right"></option>
            <option value="justify"></option>
          </select>
          <button class="ql-list" value="ordered"></button>
          <button class="ql-list" value="bullet"></button>
          <button class="ql-blockquote"></button>
          <button class="ql-code-block"></button>
          <button class="ql-link"></button>
          <button class="ql-image" @click="updateImage"></button>
        </div>
      </template>
    </QuillEditor>
    <div class="post-actions-row">
      <a-button type="primary" html-type="submit">
        <router-link to="/blogs"> Back to Blogs</router-link>
      </a-button>
      <a-button type="primary" @click="Update">Update</a-button>
    </div>
  </div>
</template>

<script>
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { QuillEditor } from "@vueup/vue-quill";
import requestUnauthorized from "@/api/request";
import CategoriesService from "@/api/CategoriesService";
import "./edit-blog.scss";
export default {
  components: {
    QuillEditor,
  },
  data() {
    return {
      categoriesItem: [],
      categories: [],
      content: "",
      formEntered: false,
      blogEdit: null,
    };
  },
  async created() {
    const response = await requestUnauthorized.get(
      `/api/blog/${this.$route.params.id}`
    );
    this.blogEdit = response;
    this.categoriesItem = this.array(this.blogEdit.categories);
    const res = await CategoriesService.get();
    this.categories = this.array(res);
  },
  methods: {
    Update() {
      this.formEntered = true;
    },
    array(arr) {
      return arr.map((item) => item.name);
    },
  },
};
</script>
<style></style>
