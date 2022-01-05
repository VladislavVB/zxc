<template>
  <div>
    <h3>Список пользователей</h3>
    <PostItem class="post" v-for="post in posts" :key="post" :post="post" />
  </div>
</template>
<script>
import PostItem from "@/components/PostItem.vue";
export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
h1 {
  margin-bottom: 10px;
}
</style>
