
import http from "../../api/request";

const auth = {
  state: {
    messageErrorLogin:"",
    isLogin: true,
    token: "",
  },
  mutations: {
    INCORECT_LOGIN(state){
      state.messageErrorLogin= 'Incorect Email or Password!'
    },
    SET_LOGIN(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
      state.isLogin = false;
    },
    CHECK_IS_LOGIN(state) {
      if (localStorage.getItem("token") !== null) {
        state.isLogin = false;
      } else {
        state.isLogin = true;
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
        if (err.response.status == 401) {
          context.commit("INCORECT_LOGIN");
        }
      }
    },
  },
  getters: {},
};

export default auth;
