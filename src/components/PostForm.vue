<template>
  <form class="post__form" @submit.prevent>
    <h3>Создание поста</h3>
    <input
      class="post__form-input"
      v-model="post.title"
      type="text"
      placeholder="Название"
    />
    <input
      class="post__form-input"
      v-model="post.body"
      type="text"
      placeholder="Описание"
    />
    <button @click="createPost()" class="post__form-btn">Отправить</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
