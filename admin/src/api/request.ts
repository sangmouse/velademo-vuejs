import { getJwtToken } from "@/utils/helpers";
import axios from "axios";
import { useRouter } from "vue-router";
import { toastError } from "@/utils/toast";
import { store } from "../stores";

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
    const router = useRouter();
    if (
      error?.response?.data?.error_message?.includes("The Token has expired")
    ) {
      // window.localStorage.setItem("logout", "false");
      store.commit("LOGOUT");
      toastError("Session Expired");
      router?.push({
        name: "login-page",
      });
    }
    return Promise.reject(error);
  }
);
export default requestUnauthorized;
