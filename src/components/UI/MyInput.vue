<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>
<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  },
};
</script>
<style lang="scss" scoped>
.input {
  width: 100%;
  border: 2px solid rgb(45, 82, 52);
  padding: 10px 15px;
  margin-bottom: 9px;
}

</style>
