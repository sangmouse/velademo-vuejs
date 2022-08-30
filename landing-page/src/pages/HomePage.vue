<template>
  <div id="home-page">
    <Carousel />
    <Products />
  </div>
</template>


<script lang="ts">
import Carousel from "@/components/carousel/Carousel.vue";
import Products from "@/components/products/Products.vue";


export default {
  components: {
    Carousel,
    Products,
    Products,
  }
}
</script>

