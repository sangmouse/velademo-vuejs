<template>
  <a-modal
    v-model:visible="isVisible"
    centered
    wrapClassName="view-info-modal"
    :footer="null"
    :title="null"
    width="50%"
  >
    <div class="modal-body">
      <slots />
    </div>
  </a-modal>
</template>

<script lang="ts">
import "./modal.scss";

export default {
  props: {
    isVisible: Boolean,
    wrapClassName: String,
    footer: Element,
    title: Element,
    width: String,
  },
};
</script>
