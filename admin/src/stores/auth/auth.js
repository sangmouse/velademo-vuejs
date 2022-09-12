import { setJwtToken } from "../../../../landing-page/src/utils/helpers";
import requestUnauthorized from "../../api/request";

const auth = {
  state: {
    error_message: "",
    isLogin: false,
  },
  mutations: {
    LOGIN_SUCCESS(state, token) {
      state.isLogin = true;
      setJwtToken(token);
      window.localStorage.removeItem("logout");
    },
    LOGIN_ERROR(state) {
      state.error_message = "Username or password is incorrect";
      state.isLogin = false;
    },
    LOGOUT(state) {
      localStorage.removeItem("token-admin");
      state.isLogin = false;
      state.error_message = "";
    },
  },
  actions: {
    async loginSuccess(context, value) {
      try {
        const response = await requestUnauthorized.post("/api/login", value);
        const token = response?.access_token;
        context.commit("LOGIN_SUCCESS", token);
      } catch (error) {
        if (error.response.status === 401) {
          context.commit("LOGIN_ERROR");
        }
      }
    },
  },
  getters: {},
};

export default auth;
