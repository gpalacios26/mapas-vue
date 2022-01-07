<template>
  <router-view></router-view>

  <img src="@/assets/logo.png" alt="Vue Logo" class="logo" />
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.logo {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 100px;
}
</style>
