<template>
  <div id="record-list">
    <div :class="'container' + ' ' + className">
      <div class="header">
        <div class="left-side">
          <p>Entries</p>
          <RouterLink to="add-record"> Add Record </RouterLink>
        </div>
        <div class="right-side"></div>
      </div>
      <Table />
    </div>
  </div>
</template>

<script lang="ts">
import "./record.scss";
import Table from "../table/Table.vue";
export default {
  props: {
    className: String,
  },
  components: { Table },
};
</script>
