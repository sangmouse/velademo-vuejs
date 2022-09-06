
import http from "../../api/request";

const auth = {
  state: {
    error_message:"",
    isLogin:false
  },
  mutations: {
    LOGIN_SUCCESS(state, token){
      state.isLogin = true
      localStorage.setItem('token-admin', token)
    },
    LOGIN_ERROR(state){
      state.error_message='Misstake'
      state.isLogin = false
    },
    LOGOUT(state){
      localStorage.removeItem('token-admin')
      state.isLogin = false
    },
  },
  actions: {
    async loginSuccess(context, value){
      try {
        const response = await http.post('/login', value )
        const token = response.data.token
        context.commit('LOGIN_SUCCESS', token)
      } catch (error) {
        context.commit('LOGIN_ERROR')
      }
    }
  },
  getters: {},
};

export default auth;
