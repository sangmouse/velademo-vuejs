<template>
  <div id="home-page">
    <div class="body">
      <Record />
    </div>
  </div>
</template>

<script lang="ts">
import Record from "../components/list-record/Record.vue";

export default {
  components: {
    Record,
  },
};
</script>

<style lang="scss" scoped>
#home-page {
  padding: 0 50px;
}
</style>
