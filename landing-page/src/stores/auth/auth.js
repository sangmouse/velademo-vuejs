
import http from "../../api/request";

const auth = {
  state: {
    checkIsLogin: true,
    token: "",
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
        alert('co loi khi dang nhap');
      }
    },
  },
  getters: {},
};

export default auth;
