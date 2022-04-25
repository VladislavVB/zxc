<template>
  <div>
    <input v-model="colorCode" placeholder="govno" type="text" />
  </div>
</template>
<script>
export default {
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorColor;
      },
      set(newValue) {
        this.$store.dispatch("setColorCode", newValue);
      },
    },
  },
};
</script>
<style lang="scss"></style>
