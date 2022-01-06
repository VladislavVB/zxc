<template>
  <div v-if="posts.length > 0">
    <h3>Список постов</h3>
    <PostItem
      class="post"
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @remove="$emit('remove', post)"
    />
  </div>
  <div v-else>
    <h3>Постов нет</h3>
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
