import { useRouter } from "vue-router";

const auth = {
  state: {
    checkIsLogin: false,
  },
  mutations: {
    CHECK_IS_LOGIN(state) {
      if (localStorage.getItem("token") !== null) {
        state.checkIsLogin = true;
        console.log(state.checkIsLogin);
        useRouter().push({
          name: "home",
        });
      } else {
        state.checkIsLogin = false;
        useRouter().push({
          name: "login",
        });
      }
    },
  },
  actions: {},
  getters: {},
};

export default auth;
