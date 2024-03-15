import axios from "axios";

// chave da api:  4ef04af3acf5f3146be9a7c8051d9a7b
// base url: https://api.tmdb.org/3/
// url da api: https://api.tmdb.org/3/movie/now_playing?api_key=4ef04af3acf5f3146be9a7c8051d9a7b&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.tmdb.org/3/'
})

export default api;