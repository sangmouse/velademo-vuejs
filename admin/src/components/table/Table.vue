<template>
  <div id="table-record">
    <a-table
      :columns="columns"
      :data-source="source"
      :pagination="false"
      :scroll="{ x: 1600 }"
    >
      <template #headerCell="{ column }"> </template>

      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <span class="actions">
            <router-link :to="'/product/' + record.id">
              <p class="view-record">
                <img src="../../assets/images/eye.png" alt="view-record" />
              </p>
            </router-link>
            <button type="button" class="btn-remove-record">
              <img src="../../assets/images/trash.png" alt="remove-record" />
            </button>
          </span>
        </template>
      </template>
    </a-table>
    <div class="paginate">
      <p>Showing 41 to 50 of 50 entries</p>
      <a-pagination showLessItems :total="50" :showSizeChanger="false" />
    </div>
  </div>
</template>

<script lang="ts">
import { SmileOutlined, DownOutlined } from "@ant-design/icons-vue";
import "./table.scss";

export default {
  props: {
    columns: Array,
    source: Array,
  },
  components: {
    SmileOutlined,
    DownOutlined,
  },
  data() {
    return {};
  },
};
</script>
