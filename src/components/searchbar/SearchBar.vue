<script lang="ts">
import SearchBar from './SearchBar';
export default SearchBar;
</script>

<template>
  <div class="searchbar-container">
    <input
      type="text"
      class="form-control"
      placeholder="Buscar lugares..."
      v-model="searchTerm"
    />
    <search-results></search-results>
  </div>
</template>

<style scoped>
.searchbar-container {
  position: fixed;
  top: 30px;
  left: 30px;
  background-color: white;
  z-index: 999;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  width: 250px;
  padding: 5px;
  border-radius: 5px;
  overflow: hidden;
}
</style>
