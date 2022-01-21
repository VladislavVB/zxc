<template>
  <div v-if="posts.length > 0">
    <h3>Список постов</h3>
    <transition-group name="list">
      <PostItem
        class="post"
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post)"
      />
    </transition-group>
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

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.list-move {
  transition: 0.5s;
}

</style>
