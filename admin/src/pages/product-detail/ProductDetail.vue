<template>
  <div id="product-detail">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-4 col-md-8 mx-auto">
          <a-carousel dots-class="slick-dots slick-thumb" effect="fade">
            <template #customPaging="props">
              <a>
                <img :src="getImgUrl(props.i)" />
              </a>
            </template>
            <div v-for="item in 4">
              <img :src="baseUrl + 'img-' + item + '.png'" />
            </div>
          </a-carousel>
        </div>
        <div class="col-xl-8">
          <div class="mt-xl-0 mt-5">
            <div class="d-flex">
              <div class="flex-grow-1">
                <h4 class="title-desc">
                  Full Sleeve Sweatshirt for Men (Pink)
                </h4>
                <div class="hstack gap-3 flex-wrap mb-4">
                  <div class="fs-15 text-muted">
                    Created User :
                    <span class="text-body fw-medium">Zoetic Fashion</span>
                  </div>
                  <div class="vr"></div>
                  <div class="fs-15 text-muted">
                    Updated Date :
                    <span class="text-body fw-medium">28 Mar, 2022</span>
                  </div>
                  <div class="vr"></div>
                  <div class="fs-15 text-muted">
                    ID :
                    <span class="text-body fw-medium">-b42c-d4d9476f9e07</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-sm-6 mb-3">
                <div class="p-2 border border-dashed rounded">
                  <div class="d-flex align-items-center">
                    <div class="avatar-sm me-2">
                      <div
                        class="avatar-title rounded bg-transparent text-success fs-24"
                      >
                        <img
                          src="../../assets/images/usd-circle-free-icon-font.png"
                          alt=""
                          class="img-fluid d-block"
                        />
                      </div>
                    </div>
                    <div class="flex-grow-1">
                      <p class="text-muted mb-1 fs-15">Price :</p>
                      <h5 class="mb-0 fs-15">$120.40</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 mb-3">
                <div class="p-2 border border-dashed rounded">
                  <div class="d-flex align-items-center">
                    <div class="avatar-sm me-2">
                      <div
                        class="avatar-title rounded bg-transparent text-success fs-24"
                      >
                        <img
                          src="../../assets/images/document-free-icon-font.png"
                          alt=""
                          class="img-fluid d-block"
                        />
                      </div>
                    </div>
                    <div class="flex-grow-1">
                      <p class="text-muted mb-1 fs-15">Created Date :</p>
                      <h5 class="mb-0 fs-15">26 Mar, 2021</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 mb-3">
                <div class="p-2 border border-dashed rounded">
                  <div class="d-flex align-items-center">
                    <div class="avatar-sm me-2">
                      <div
                        class="avatar-title rounded bg-transparent text-success fs-24"
                      >
                        <img
                          src="../../assets/images/id-badge-free-icon-font.png"
                          alt=""
                          class="img-fluid d-block"
                        />
                      </div>
                    </div>
                    <div class="flex-grow-1">
                      <p class="text-muted mb-1 fs-15">Category ID :</p>
                      <h5 class="mb-0 fs-15">b42c-d4d9476f9e07</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-4 text-muted">
              <h5 class="title-desc">Description :</h5>
              <p class="text-muted">
                Tommy Hilfiger men striped pink sweatshirt. Crafted with cotton.
                Material composition is 100% organic cotton. This is one of the
                world’s leading designer lifestyle brands and is internationally
                recognized for celebrating the essence of classic American cool
                style, featuring preppy with a twist designs.
              </p>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="mt-4">
                  <h5 class="title-desc">Categories :</h5>
                  <ul class="fs-15 list-unstyled">
                    <li class="p-1 text-list">Full Sleeve</li>
                    <li class="p-1 text-list">Cotton</li>
                    <li class="p-1 text-list">All Sizes available</li>
                    <li class="p-1 text-list">4 Different Color</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "./product-detail.scss";
const baseUrl = "../src/assets/images/product-detail/";
export default {
  data() {
    return {
      baseUrl,
    };
  },
  methods: {
    getImgUrl(i) {
      return `${baseUrl}img-${i + 1}.png`;
    },
  },
};
</script>
<style scoped>
.ant-carousel >>> .slick-dots {
  height: auto;
  margin: 20px 0 0 0;
  position: relative;
}
.ant-carousel >>> .slick-slide img {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  background-color: #f3f6f9;
}
.ant-carousel >>> .slick-thumb {
  bottom: 0;
}
.ant-carousel >>> .slick-thumb li {
  width: 88.2px;
  height: 88.2px;
  border-radius: 4px;
  border: 1px solid #e9ebec;
}
.ant-carousel >>> .slick-thumb li img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}
.ant-carousel >>> .slick-thumb .slick-active {
  background-color: #f3f6f9;
}
.ant-carousel >>> .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
</style>
