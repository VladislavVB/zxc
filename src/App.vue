<template>
  <div class="post__wrapper">
    <h1>Страница с постами</h1>
    <my-input v-model="searchQuery" placeholder="Поиск"></my-input>
    <div class="app__btns">
      <my-button class="post__create" @click="showDialog"
        >Создать пост</my-button
      >
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </my-dialog>
    <PostList
      v-if="!isPostLoading"
      :posts="sortAndSearchPosts"
      @remove="removePost"
    />
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
    <post-pagination :totalPages="totalPages" @chengePage="chengePage" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import PostPagination from "./components/PostPagination.vue";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
    PostPagination,
  },
  data() {
    return {
      dialogVisible: false,
      isPostLoading: false,
      posts: [],
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limitPage: 10,
      totalPages: 0,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержимомуe" },
      ],
    };
  },
  methods: {
    chengePage(pageNumber) {
      this.page = pageNumber;
    },
    createPost(post) {
      this.dialogVisible = false;
      this.posts.push(post);
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
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limitpage: this.limitPage,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limitPage
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
  computed: {
    sortedPost() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        );
      });
    },
    sortAndSearchPosts() {
      return this.sortedPost.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    page() {
      this.fetchPosts();
    },
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
