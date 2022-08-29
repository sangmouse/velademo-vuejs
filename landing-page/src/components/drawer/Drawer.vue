<template>
  <a-drawer
    v-model:visible="isVisible"
    :class="class"
    :title="title"
    placement="right"
    :width="400"
    @close="(event: any) => $emit('handleClose', event)"
  >
    <slot></slot>
  </a-drawer>
</template>

<script lang="ts">
import "./drawer.scss";

export default {
  props: {
    isVisible: Boolean,
    class: String,
    title: String,
  },
  data() {},
  methods: {},
};
</script>
