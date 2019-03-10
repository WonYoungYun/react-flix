import axios from 'axios';
import cfg from '../config'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        "api_key": cfg.key,
        language: "ko"
    }
})

//상대경로를 사용해야하며 절대경로를 사용하게 되면 axios.create의 base가 덮어쓰여진다.
const movieApi = {
    nowPlaying: () => api.get('movies/now_playing'),
    upcoming: () => api.get('movie/upcoming'),
    // toprated: () => api.get('movie/top_rated')
    popular: () => api.get('movie/popular'),
    movieDetail: id => api.get(`movie/${id}`, {
        params: {
            append_to_response: 'videos'
        }
    }),
    search: term => api.get('search/movie', {
        params: {
            query: encodeURIComponent(term)

        }
    })
}

const tvApi = {
    topRated: () => api.get('tv/top_rated'),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get('tv/airing_today'),
    showDetail: id => api.get(`tv/${id}`, {
        params: {
            append_to_response: 'videos'
        }
    }),
    search: term => api.get('search/tv', {
        params: {
            query: encodeURIComponent(term)

        }
    })
}

export { tvApi, movieApi }