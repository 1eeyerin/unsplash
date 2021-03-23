import { FetchJson } from "../lib/Fetch";

const API = {
  getPhotos: data => FetchJson.get("/photos", data),
  searchPhotos: data => FetchJson.get("/search", data),
  getTopicList: data => FetchJson.get("/topics", data),
  getTopicPhoto: ([data, query]) => FetchJson.get(`/topics/${query}/photos`, data),
  getPhotoById: id => FetchJson.get(`/photos/${id}`),
  getPhotoRelated: id => FetchJson.get(`/photos/${id}/related`)
};

export default API;
