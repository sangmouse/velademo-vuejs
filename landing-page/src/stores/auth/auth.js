
import http from "../../api/request";

const auth = {
  state: {
    checkIsLogin: true,
    token: "",
    errorAuth:"Dang nhap that bai, vui long thu lai sau"
  },
  mutations: {
    SET_LOGIN(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
      state.checkIsLogin = false;
    },
    CHECK_IS_LOGIN(state) {
      if (localStorage.getItem("token") !== null) {
        state.checkIsLogin = false;
      } else {
        state.checkIsLogin = true;
      }
    },
  },
  actions: {
    async getLogin(context, infor) {
      try {
        const response = await http.post(`/login`, infor);
        const token = response.data.token;
        context.commit("SET_LOGIN", token);

      } catch (err) {
        console.log(err);
        state.errorAuth = "Dang nhap that bai, vui long thu lai sau"
      }
    },
  },
  getters: {},
};

export default auth;
