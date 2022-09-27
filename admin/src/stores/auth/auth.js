import { setJwtToken } from "@/utils/helpers";
import requestUnauthorized from "@/api/request";
import { toastSuccess} from '@/utils/toast'

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
      toastSuccess('Login Success')
    },
    LOGIN_ERROR(state, msg) {
      state.error_message = msg;
      state.isLogin = false;
    },
    LOGOUT(state) {
      sessionStorage.removeItem("jwt");
      state.isLogin = false;
      state.error_message = "";
      toastSuccess('Logout Success')
    },
  },
  actions: {
    async loginSuccess(context, value) {
      try {
        const response = await requestUnauthorized.post("/api/login", value);
        const token = response?.access_token;
        context.commit("LOGIN_SUCCESS", token);
      } catch (error) {
        if (
          error.response.status === 404 ||
          error?.response?.data?.Message?.includes(
            "Username password incorrect"
          )
        ) {
          context.commit("LOGIN_ERROR", error?.response?.data?.Message || "");
        }
      }
    },
  },
  getters: {},
};

export default auth;
