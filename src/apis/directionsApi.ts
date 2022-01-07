import axios from 'axios';

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiZ3BhbGFjaW9zMjYiLCJhIjoiY2txOGltM2hxMGdkOTJ2bXF3dHdnYTdhaSJ9.QQE1iAlk_2h-XSbDECRdjw'
    }
});

export default directionsApi;