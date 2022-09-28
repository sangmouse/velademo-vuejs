import { getJwtToken } from "@/utils/helpers";
import axios from "axios";
import { toastError } from "@/utils/toast";
import { store } from "../stores";
import router from "@/router";

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
      // request.headers["Authorization"] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaHR1MUBjbWNnbG9iYWwudm4iLCJyb2xlcyI6WyJBRE1JTiJdLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODEvYXBpL2xvZ2luIiwiZXhwIjoxNjY0MjUyNzgwfQ.hIHGIvgyCVUwibhuSu8q0hXNWs5WQyqdhDxiuYgjI6Y`;
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
    // const router = useRouter();
    if (error.response.status === 403 && error?.response?.data?.error_message?.includes("The Token has expired")) {
      window.sessionStorage.removeItem('jwt')
      toastError("Session Expired")
      router.push({
        name: "login-page",
      });
      // auth.actions.loginSuccess({
      //   username: 'dhtu1@cmcglobal.vn',
      //   password: '123456'
      // })

    }
    // if (
    //   error?.response?.data?.error_message?.includes("The Token has expired")
    // ) {
    //   // window.localStorage.setItem("logout", "false");
    //   store.commit("LOGOUT");
    //   toastError("Session Expired");
    //   router?.push({
    //     name: "login-page",
    //   });
    // }
    return Promise.reject(error);
  }
);
export default requestUnauthorized;
