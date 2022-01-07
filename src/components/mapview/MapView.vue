<script lang="ts">
import MapView from './MapView';
export default MapView;
</script>

<template>
  <div
    v-if="!isUserLocationReady"
    class="loading-map d-flex justify-content-center align-items-center"
  >
    <div class="text-center">
      <h3>Espere por favor</h3>
      <span>Localizando...</span>
    </div>
  </div>

  <div
    v-show="isUserLocationReady"
    class="map-container"
    ref="mapElement"
  ></div>
</template>

<style scoped>
.loading-map {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
}

.map-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
}
</style>
