<template>
  <div class="dialog" v-if="show === true" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import toggleMixin from "@/mixins/toggleMixin";
export default {
  name: "my-dialog",
  mixins: [toggleMixin],
  // props: {
  //   show: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  // methods: {
  //   hideDialog() {
  //     this.$emit("update:show", false);
  //   },
  // },
};
</script>
<style lang="scss" scoped>
.dialog {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  &__content {
    margin: auto;
    background: #fff;
    border-radius: 12px;
    min-width: 300px;
    min-height: 50px;
    padding: 20px;
  }
}
</style>
