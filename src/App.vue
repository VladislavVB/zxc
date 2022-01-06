<template>
  <div class="post__wrapper">
    <h1>Страница с постами</h1>
    <my-button class="post__create" @click="showDialog">Создать пост</my-button>
    <my-dialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </my-dialog>
    <PostList v-if="!isPostLoading" :posts="posts" @remove="removePost" />
    <div v-else>загрузка...</div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyButton from "@/components/UI/MyButton.vue";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
    MyButton,
  },
  data() {
    return {
      dialogVisible: false,
      isPostLoading: false,
      posts: [],
    };
  },
  methods: {
    createPost(post) {
      console.log(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        this.isPostLoading = true;

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = response.data;
        this.isPostLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.fetchPosts();
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
    h3 {
      margin-bottom: 15px;
    }
  }
  &__create {
    margin-top: 50px;
    margin-bottom: 50px;
  }
}
</style>
