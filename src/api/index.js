import {FetchJson} from "../lib/Fetch";

const API = {
    getTodo: (data) => FetchJson.get('/todos', data),
}

export default API;