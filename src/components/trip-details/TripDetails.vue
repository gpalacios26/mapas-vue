<template>
  <div v-if="distance && duration" class="trip-container column">
    <div class="col">
      Distancia: <strong>{{ distance }} kms</strong>
    </div>
    <div class="col">
      Duración: <strong>{{ duration }} minutos</strong>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMapStore } from '@/composables';

export default defineComponent({
  name: 'TripDetails',
  setup() {
    const { distance, duration } = useMapStore();

    return {
      distance,
      duration,
    };
  },
});
</script>

<style scoped>
.trip-container {
  position: fixed;
  bottom: 50px;
  left: 20px;
  width: 300px;
  padding: 10px;
  background-color: white;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  font-size: 20px;
}

strong {
  color: #42b983;
}
</style>
