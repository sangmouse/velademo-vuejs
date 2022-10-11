<template>
  <div class="row mt-4 mb-4">
    <div class="col-12 col-sm-6 col-md-6">
      <div class="card" v-for="item in productBlog.voList" :key="item.id">
        <img :src="url + item?.images[0]?.url" class="card-img-top" alt="..." />
        <div class="blog__title">lifestyle</div>
        <div class="blog-article d-flex">
          <span class="blog-article__author">{{ item.userName }}</span>
          <span>Apr 04, 2020</span>
        </div>
        <div class="blog__text">{{ item.title }}</div>
        <p class="card-text">{{ item.description }}</p>
        <button class="blog-btn">
          Read More
          <span><i class="fa-regular fa-circle-right"></i></span>
        </button>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-6">
      <div class="card" v-for="item in productBlog2.voList" :key="item.id">
        <img :src="url + item?.images[0]?.url" class="card-img-top" alt="..." />
        <div class="blog__title">lifestyle</div>
        <div class="blog-article d-flex">
          <span class="blog-article__author">{{ item.userName }}</span>
          <span>Apr 04, 2020</span>
        </div>
        <div class="blog__text">{{ item.title }}</div>
        <p class="card-text">{{ item.description }}</p>
        <button class="blog-btn">
          Read More
          <span><i class="fa-regular fa-circle-right"></i></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import "./product-blog.scss";
import requestAuthorized from "@/api/request";
export default {
  data() {
    return {
      productBlog: [],
      productBlog2: [],
      url: "http://localhost:8081/api/image/downloadFile/",
    };
  },
  async created() {
    const response = await requestAuthorized.get("/api/blogs?page=1&size=5");
    this.productBlog = response;
    const response2 = await requestAuthorized.get("/api/blogs?page=2&size=5");
    this.productBlog2 = response2;
  },
};
</script>
