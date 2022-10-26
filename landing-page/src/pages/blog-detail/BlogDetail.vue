<template>
  <div id="blog-detail">
    <SlideShow />
    <div class="container">
      <div class="row mt-4 mb-4">
        <div class="col-12 col-sm-12 col-md-9">
          <div class="blog-detail">
            <h1 class="blog-detail__title">{{ blogDetail?.title }}</h1>
            <div class="card">
              <img
                :src="urlImg + blogDetail?.images[0]?.url"
                class="card-img-top"
                alt="..."
              />
              <div class="blog__title">lifestyle</div>
              <div class="blog-article d-flex">
                <span class="blog-article__author"
                  >{{ blogDetail?.userName }}.</span
                >
                <span class="blog-article__date">Apr 04, 2020</span>
              </div>
              <p class="card-txt">
                {{ blogDetail?.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-3">
          <SiderBar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlideShow from "@/components/slide-show/SlideShow.vue";
import SiderBar from "@/components/sider-bar/SiderBar.vue";
import "./blog-detail.scss";
import requestUnauthorized from "@/api/request";
export default {
  components: { SiderBar, SlideShow },
  async created() {
    const response = await requestUnauthorized.get(
      `/api/blog/${this.$route.params.id}`
    );
    this.blogDetail = response;
    console.log("blog", this.blogDetail);
  },
  data() {
    return {
      blogDetail: null,
      urlImg: "http://localhost:8081/api/image/downloadFile/",
    };
  },
};
</script>
<style scoped></style>
