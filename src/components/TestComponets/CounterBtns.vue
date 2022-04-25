<template>
  <div>
    <my-button @click="$store.dispatch('minusConuter')">-</my-button>
    <my-button @click="$store.dispatch('plusConuter')">+</my-button>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss"></style>
