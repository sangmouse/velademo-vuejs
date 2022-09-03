<template>
  <div id="table-record">
    <a-table :columns="columns" :data-source="data" :pagination="false">
      <template #headerCell="{ column }"> </template>

      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <span class="actions">
            <router-link to="/view-record">
              <p class="view-record">
                <img src="../../assets/images/eye.png" alt="view-record" />
              </p>
            </router-link>
            <router-link to="/edit-record">
              <p class="edit-record">
                <img src="../../assets/images/edit.png" alt="edit-record" />
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

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Actions",
    key: "action",
  },
];

console.log(columns);

const data = [
  {
    id: "1",
    name: "John Brown",
    address: "New York No. 1 Lake Park",
  },
  {
    id: "2",
    name: "Jim Green",
    address: "London No. 1 Lake Park",
  },
  {
    id: "3",
    name: "Joe Black",
    address: "Sidney No. 1 Lake Park",
  },
];

export default {
  components: {
    SmileOutlined,
    DownOutlined,
  },
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
