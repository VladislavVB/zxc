<template>
  <div class="app">
    <my-navbar></my-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import MyNavbar from "./components/Navbar.vue";
export default {
  components: { MyNavbar },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
