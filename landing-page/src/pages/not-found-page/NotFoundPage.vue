<template>
  <div id="not-found-page">
    <div class="body">
      <div class="container">
          <h3 class="not-found-page__title">404</h3>
          <h3 class="not-found-page__title not-found-page__title--sub">PAGE NOT FOUND</h3>
          <p class="not-found-page__desc">You may have mis-typed the URL. Or the page has been removed, had its name changed, or is temporarily unavailabl Actually, there is nothing to see here....</p>
          <RouterLink to="/">
            <button type="button" class="btn btn-dark not-found-page__submit">Back to home</button>
          </RouterLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import "./not-found-page.scss";
</script>
