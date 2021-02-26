import axios from "axios";
import {URL} from "../constants/Consts";

const axiosInstance = axios.create({
    baseURL: URL.BASE_API_URL,
    timeout: 6000,
});

const API = {
    getPhotos: (data) => axiosInstance({
        method: 'get',
        url: '/photos',
        params: data,
    }),
    searchPhotos: (data) => axiosInstance({
        method: 'get',
        url: '/search/photos',
        params: data,
    })
}

export default API;