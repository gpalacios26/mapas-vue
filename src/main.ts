import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiZ3BhbGFjaW9zMjYiLCJhIjoiY2txOGltM2hxMGdkOTJ2bXF3dHdnYTdhaSJ9.QQE1iAlk_2h-XSbDECRdjw';

if (!navigator.geolocation) {
    alert('Tu navegador no soporta el GeoLocation');
    throw new Error('Tu navegador no soporta el GeoLocation');
}

createApp(App).use(store).use(router).mount('#app')
