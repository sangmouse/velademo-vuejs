import { getJwtToken } from "@/utils/helpers";
import axios from "axios";

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
    if (error?.response?.data?.message === "No authorization token was found") {
      sessionStorage.removeItem("jwt");
      window.localStorage.setItem("logout", "false");
      // this.$store.commit("CHECK_IS_LOGIN");
    }
    return Promise.reject(error);
  }
);
export default requestUnauthorized;
