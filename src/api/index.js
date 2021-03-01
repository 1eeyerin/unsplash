import {FetchJson} from "../lib/Fetch";

const API = {
    getPhotos: (data) => FetchJson.get('/photos', data),
    searchPhotos: (data) => FetchJson.get('/search/photos', data),
    getTopicList: (data) => FetchJson.get('/topics', data),
}

export default API;