<template>
  <div class="collection-body-filter">
    <div class="collection-body-filter-categories">
      <h4 class="collection-body-filter-categories-title">
        Product Categories
      </h4>
      <ul class="collection-body-filter-categories-list">
        <li
          @click="handleFilterCategory(item.id)"
          v-for="item in productCategories"
          :key="item.id"
          class="collection-body-filter-categories-list__item"
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
          @click="handleFilterPrice(item.id)"
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
      <div class="collection-body-filter-bestSeller-item">
        <img
          src="https://cdn.shopify.com/s/files/1/0376/9440/6700/products/14_360x.jpg?v=1586245038"
          alt=""
          class="collection-body-filter-bestSeller-item__img"
        />
        <div class="collection-body-filter-bestSeller-item__info">
          <p>Victor pedent lamp</p>
          <span>$70</span>
        </div>
      </div>
      <div class="collection-body-filter-bestSeller-item">
        <img
          src="../../assets/images/products/product_2.jpg"
          alt=""
          class="collection-body-filter-bestSeller-item__img"
        />
        <div class="collection-body-filter-bestSeller-item__info">
          <p>Stainless steel Teapot</p>
          <span>$85.93</span>
        </div>
      </div>
      <div class="collection-body-filter-bestSeller-item">
        <img
          src="../../assets/images/products/product_3.jpg"
          alt=""
          class="collection-body-filter-bestSeller-item__img"
        />
        <div class="collection-body-filter-bestSeller-item__info">
          <p>Beoplay A1</p>
          <span>$56.82</span>
        </div>
      </div>
      <div class="collection-body-filter-bestSeller-item">
        <img
          src="../../assets/images/products/product_6.jpg"
          alt=""
          class="collection-body-filter-bestSeller-item__img"
        />
        <div class="collection-body-filter-bestSeller-item__info">
          <p>Pia Chair</p>
          <span>$23.8</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./productFilter.scss";
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
    };
  },
  methods: {
    handleFilterCategory(id) {
      console.log(id);
    },
    handleFilterPrice(id) {
      console.log(id);
    },
  },
};
</script>

<style></style>
