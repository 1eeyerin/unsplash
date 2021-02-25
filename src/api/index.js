import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
    timeout: 6000,
});

const API = {
    getPhotos: (data) => axiosInstance({
        method: 'get',
        url: '/photos',
        params: data,
    })
}

export default API;