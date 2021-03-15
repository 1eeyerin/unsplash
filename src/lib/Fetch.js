import axios from "axios";
import { URL } from "../constants/Consts";

const FetchConsts = {
  GET: "get",
  POST: "post"
};

const axiosInstance = axios.create({
  baseURL: URL.BASE_API_URL,
  timeout: 6000
});

const request = async (method, url, data = {}) => {
  try {
    const config = {
      url,
      method
    };

    if (method === FetchConsts.GET) {
      config.params = {
        client_id: URL.API_CLIENT_ID,
        ...data
      };
    } else {
      config.data = data;
    }

    const result = await axiosInstance(config);
    return result.data;
  } catch (e) {
    console.log("@@ e", e);
  } finally {
  }
};

const FetchJson = {
  get: (url, data) => request(FetchConsts.GET, url, data),
  post: (url, data) => request(FetchConsts.POST, url, data)
};

export { FetchJson };
