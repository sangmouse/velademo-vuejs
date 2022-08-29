<template>
  <div class="container">
    <div class="Page">
      <div class="Page-wrap">
        <h3 class="Page-wrap__title">404</h3>
        <h3 class="Page-wrap__title Page-wrap__title--sub">PAGE NOT FOUND</h3>
        <p class="Page-wrap__text">
          You may have mis-typed the URL. Or the page has been removed, had its
          name changed, or is temporarily unavailabl Actually, there is nothing
          to see here....
        </p>
        <RouterLink to="/">
          <button type="submit" class="btn btn-dark Page-wrap__btn">
            Back to home
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import "./not-found-page.scss";
</script>
