import axios from 'axios';
import {URL} from "../constants/Consts";

const FetchConsts = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
    APPLICATION_JSON: 'application/json',
    APPLICATION_X_WWW_FORM_URL_ENCODED: 'application/x-www-form-urlencoded',
    MULTIPART_FORM_DATA: 'multipart/form-data',
    TEXT_PLAIN: 'text/plain',
}

const axiosInstance = axios.create({
    baseURL: URL.API_BASE_URL,
    timeout: 6000,
});

const request = async (contentType, method, url, data = {}) => {

    try {
        const config = {
            url,
            method,
        }

        if (method === FetchConsts.GET) {
            config.params = data;
        } else {
            config.data = data;
        }

        console.log('@@[Request Config]', config);

        const result = await axiosInstance(config);

        return result.data;
    } catch (e) {
        console.log("@@ e", e)
    } finally {

    }
}

const FetchJson = {
    get: (url, data) => request(FetchConsts.APPLICATION_JSON, FetchConsts.GET, url, data),
    post: (url, data) => request(FetchConsts.APPLICATION_JSON, FetchConsts.POST, url, data),
    put: (url, data) => request(FetchConsts.APPLICATION_JSON, FetchConsts.PUT, url, data),
    delete: (url, data) => request(FetchConsts.APPLICATION_JSON, FetchConsts.DELETE, url, data),
}

export {FetchJson};