<template>
  <div>
    <h1>Пост номер {{ SingleData.id }}</h1>
    <h2>{{ SingleData.title }}</h2>
    <p>{{ SingleData.body }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      SingleData: {},
    };
  },
  methods: {
    async fetchPosts() {
      console.log(this.$route.params.id);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
        );
        this.SingleData = response.data;
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
<style lang="scss"></style>
