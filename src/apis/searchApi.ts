import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiZ3BhbGFjaW9zMjYiLCJhIjoiY2txOGltM2hxMGdkOTJ2bXF3dHdnYTdhaSJ9.QQE1iAlk_2h-XSbDECRdjw'
    }
});

export default searchApi;