<template>
  <div class="post" v-for="post in posts" :key="post">
    <div><strong>Название: </strong>{{ post.title }}</div>
    <div><strong>Описание: </strong>{{ post.body }}</div>
  </div>
</template>
<script>
export default {
  props: {
    posts: {
      type: Array,
    }
  }
};
</script>
<style lang="scss" scoped>
h1 {
  margin-bottom: 10px;
}
</style>
