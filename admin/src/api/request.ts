import { getJwtToken } from "@/utils/helpers";
import axios from "axios";
import router from "@/router";
import { toastError } from "@/utils/toast";

const API_URL = "http://localhost:8081";

const requestUnauthorized = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

requestUnauthorized.interceptors.request.use(
  (request) => {
    const token = getJwtToken();
    if (token) {
      request.headers["Authorization"] = `Bearer ${token}`;
    }
    // Edit request config
    return request;
  },
  (error) => {
    // console.log(error);
    return Promise.reject(error);
  }
);

requestUnauthorized.interceptors.response.use(
  (response) => {
    // console.log(response);
    // Edit response config

    return response.data;
  },
  (error) => {
    if (error.response.status === 403 && error?.response?.data?.error_message?.includes("The Token has expired")) {
      window.sessionStorage.removeItem('jwt')
      toastError("Session Expired")
      router.push({
        name: "login-page",
      });
    }
    return Promise.reject(error);
  }
);
export default requestUnauthorized;
