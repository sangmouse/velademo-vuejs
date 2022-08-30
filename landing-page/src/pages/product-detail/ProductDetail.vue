<template>
  <div class="container">
      <ProductDetail />
      <LikeSlider />
  </div>
</template>

<script lang="ts">
  import ProductDetail from '@/components/productDetail-infor/ProductDetail.vue'
  import LikeSlider from '@/components/likeSlider/LikeSlider.vue'

  export default {
  components: {ProductDetail , LikeSlider}
};
</script>

<style lang="scss" scoped>

.container {
  margin: auto;
  padding: 30px 0;
}

</style>