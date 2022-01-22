<template>
  <div class="page">
    <div
      class="page__count"
      :class="{ active: page === pageNumber }"
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      @click="goPage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    };
  },
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
  },
  methods: {
    goPage(pageNumber) {

      this.$emit('chengePage', pageNumber)
      this.page = pageNumber;

    }
  },
};
</script>

<style lang="scss">
.page {
  display: flex;
  margin-top: 20px;
  margin-bottom: 50px;
  &__count {
    padding: 10px;
    border: 1px solid #2d5234;
    &.active {
      background: rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
