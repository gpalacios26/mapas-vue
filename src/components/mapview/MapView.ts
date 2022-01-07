import { defineComponent, onMounted, ref, watch } from 'vue';
import Mapboxgl from 'mapbox-gl';
import { usePlacesStore, useMapStore } from '@/composables';

export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserLocationReady } = usePlacesStore();
        const { setMap } = useMapStore();

        const initMap = async () => {
            if (!mapElement.value) throw new Error('Div Element no existe');
            if (!userLocation.value) throw new Error('user location no existe');

            await Promise.resolve();

            const map = new Mapboxgl.Map({
                container: mapElement.value,
                style: 'mapbox://styles/mapbox/light-v10',
                center: userLocation.value,
                zoom: 15
            });

            const myLocationPopup = new Mapboxgl.Popup()
                .setLngLat(userLocation.value)
                .setHTML(`
                    <h5>Aquí estoy</h5>
                    <p>Actualmente en Lima - Perú</p>
                `);

            new Mapboxgl.Marker()
                .setLngLat(userLocation.value)
                .setPopup(myLocationPopup)
                .addTo(map);

            setMap(map);
        }

        onMounted(() => {
            if (isUserLocationReady.value) return initMap();
        });

        watch(isUserLocationReady, () => {
            if (isUserLocationReady.value) initMap();
        });

        return {
            mapElement,
            isUserLocationReady
        }
    }
});