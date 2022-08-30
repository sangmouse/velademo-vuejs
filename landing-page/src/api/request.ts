import axios from "axios";

const API_URL = "http://localhost:3000";

const http = axios.create({
  baseURL: API_URL,
});

http.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return { ...config };
  },
  (err) => {
    // Do something with request error
    return Promise.reject(err);
  }
);

http.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response.data;
  },
  (err) => {
    // Do something with response error
    return Promise.reject(err);
  }
);

export default http;
