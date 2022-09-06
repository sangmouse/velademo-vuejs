import http from "../../api/request";

const auth = {
  state: {
    messageErrorLogin: "tuan",
    isLogin: true,
    token: "",
    statusLogin: "login",
  },
  mutations: {
    STATUS_LOGIN(state, status) {
      state.statusLogin = status;
    },
    INCORECT_LOGIN(state) {
      state.messageErrorLogin = "Incorect Email or Password!";
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
        console.log("1");
        const response = await http.post("/api/login", infor);
        console.log(response);
        const token = response.access_token;
        context.commit("SET_LOGIN", token);
      } catch (err) {
        if (err.response.status === 401) {
          context.commit("INCORECT_LOGIN");
        }
        console.log(err);
      }
    },
  },
  getters: {},
};

export default auth;
