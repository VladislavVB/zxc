<template>
  <div class="navbar">
    <my-button @click="$router.push('/')">Главная</my-button>
    <my-button @click="$router.push('/test')">Test</my-button>
    <my-button @click="$router.push('/posts')">Посты</my-button>
    <my-button @click="$router.push('/about')">О нас</my-button>
    <my-button @click="$router.push('/store')">Посты Store</my-button>
    <my-button @click="$router.push('/composition')">Посты API</my-button>
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
    // background: rgba(0, 0, 0, 0.3);
    border-bottom: 3px solid #2d5234;
  }
</style>