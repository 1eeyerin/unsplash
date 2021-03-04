import {FetchJson} from "../lib/Fetch";

const API = {
    getPhotos: (data) => FetchJson.get('/photos', data),
    searchPhotos: (data) => FetchJson.get('/search/photos', data),
    getTopicList: (data) => FetchJson.get('/topics', data),
    getTopicPhoto: ([data, query]) => FetchJson.get(`/topics/${query}/photos`, data),
}

export default API;