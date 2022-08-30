<template>
  <div class="container">
    <div class="search">
      <h1 class="search__title">Search for <span v-if="showmessageSearch"> "{{messageSearch}}" </span> products on our site</h1>
        <div class="search-group">
          <input type="text" v-model="messageSearch" placeholder="Enter keywords to search..." class="search-group__input form-control">
          <div class="search-group-addon">
            <button class="btn search-group-addon__btn" @click="handleSearch" type="button">
              <img src="../../assets/images/search.png" alt="search-i">
            </button>
          </div>
        </div>
      <div class="search-list d-flex">
        <div class="search-list-item col-xs-12 col-sm-6 col-md-3">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "./search-product.scss";
export default {
  data() {
    return {
      messageSearch: '',
      showmessageSearch: false
    }
  },
  methods: {
    handleSearch(){
      this.showmessageSearch = true
      console.log(this.messageSearch)
    }
  }
}
</script> 