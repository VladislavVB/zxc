<template>
  <div class="navbar">
    <my-button @click="$router.push('/')">Главная</my-button>
    <my-button @click="$router.push('/posts')">Посты</my-button>
    <my-button @click="$router.push('/about')">О нас</my-button>
  </div>
</template>

<script>

export default {
 
  
}
</script>
<style lang="scss">
  .navbar {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.3);
  }
</style>