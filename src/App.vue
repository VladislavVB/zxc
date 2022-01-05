<template>
  <div class="post__wrapper">
    <form class="post__form" @submit.prevent>
      <h3>Создание поста</h3>
      <input class="post__form-input" v-model="postTile" type="text" placeholder="Название" />
      <input class="post__form-input" v-model="postBody" type="text" placeholder="Описание" />
      <button @click="createPost()" class="post__form-btn">Отправить</button>
    </form>
    <div class="post" v-for="post in posts" :key="post">
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postTile: '',
      postBody: '',
      posts: [],
    };
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.postTile,
        body: this.postBody,
      }
      this.posts.push(newPost)
      this.postTile = ''
      this.postBody = ''
    }
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.post {
  padding: 15px;
  border: 2px solid rgb(45, 82, 52);
  margin-top: 15px;
  &__wrapper {
    max-width: 800px;
    margin: auto;
    margin-top: 15px;
  }
  &__form {
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
    h3 {
      margin-bottom: 15px;  
    }
    &-input {
      width: 100%;
      border: 2px solid rgb(45, 82, 52);
      padding: 10px 15px;
      margin-bottom: 10px;
    }
    &-btn {
      margin-left: auto;
      margin-top: 15px;
      border: 2px solid rgb(45, 82, 52);
      align-self: flex-end;
      padding: 10px 15px;
      background-color: transparent;
    }
  }
}
</style>
