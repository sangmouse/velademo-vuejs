<template>
  <div class="collection-body-filter">
    <div class="collection-body-filter-categories">
      <h4 class="collection-body-filter-categories-title">
        Product Categories
      </h4>
      <ul class="collection-body-filter-categories-list">
        <li
          v-for="item in productCategories"
          :key="item.id"
          class="collection-body-filter-categories-list__item"
          @click="$emit('handleFilterCategory', item.name)"
        >
          <span class="not-tick"><i class="fa-regular fa-circle"></i></span>
          <span class="ticked"><i class="fa-solid fa-circle-check"></i></span>
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="collection-body-filter-price">
      <h4 class="collection-body-filter-categories-title">Price</h4>
      <ul class="collection-body-filter-categories-list">
        <li
          v-for="item in productPrices"
          :key="item.id"
          @click="handleFilterPrice(item.price)"
          class="collection-body-filter-categories-list__item"
        >
          <span class="not-tick"><i class="fa-regular fa-circle"></i></span>
          <span class="ticked"><i class="fa-solid fa-circle-check"></i></span>
          {{ item.price }}
        </li>
      </ul>
    </div>
    <div class="collection-body-filter-bestSeller">
      <h4 class="collection-body-filter-bestSeller-title">Best Seller</h4>
      <div
        v-for="item in productBestSeller"
        :key="item.id"
        class="collection-body-filter-bestSeller-item"
      >
        <RouterLink :to="'/product/' + item.id">
          <img
            :src="item.images"
            alt=""
            class="collection-body-filter-bestSeller-item__img"
        /></RouterLink>
        <div class="collection-body-filter-bestSeller-item__info">
          <p>{{ item.displayName }}</p>
          <span>${{ item.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./productFilter.scss";
import requestProductDbJson from "../../api/requestProducDbJson";
export default {
  data() {
    return {
      productCategories: [
        { name: "All Categories", id: 1 },
        { name: "Furniture", id: 2 },
        { name: "Chair", id: 3 },
        { name: "Sofa", id: 4 },
        { name: "Decor Art", id: 5 },
      ],
      productPrices: [
        {
          price: "$0 - $50",
          id: 1,
        },
        {
          price: "$50 - $100",
          id: 2,
        },
        {
          price: "$100 - $150",
          id: 3,
        },
        {
          price: "$150 - $200",
          id: 4,
        },
      ],
      productBestSeller: [],
    };
  },
  methods: {
    // handleFilterCategory(value) {
    //   console.log(value);
    //   this.$emit('filter', value)
    // },
    handleFilterPrice(id) {
      console.log(id);
    },
  },
  async created() {
    try {
      const response = await requestProductDbJson.get(`/products`);
      this.productBestSeller = response.data.filter((item) => item.id < 5);
    } catch (error) {}
  },
};
</script>

<style></style>
