<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'my-button'
};
</script>
<style lang="scss" scoped>
.btn {
  border: 2px solid rgb(45, 82, 52);
  padding: 10px 15px;
  background-color: transparent;
  cursor: pointer;
}
</style>
