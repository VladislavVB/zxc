<template>
  <div class="post__wrapper">
    <h1>Страница с постами</h1>
    <div class="app__btns">
      <my-button class="post__create" @click="showDialog"
        >Создать пост</my-button
      >
      <my-select
        :value="selectedSort"
        :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </my-dialog>
    <PostList v-if="!isPostLoading" :posts="posts" @remove="removePost" />
    <div v-else>
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MySelect from "@/components/UI/MySelect.vue";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
    MyButton,
    MySelect,
  },
  data() {
    return {
      dialogVisible: false,
      isPostLoading: false,
      posts: [],
      selectedSort: 'dsadsad',
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
      ]
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
.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #2d5234;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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
  }
}
.app {
  &__btns {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 50px;
  }
}
</style>
