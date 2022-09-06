
import http from "../../api/request";

const auth = {
  state: {
    token:""
  },
  mutations: {
    LOGIN_SUCCESS(state, token){
      state.token = token
      localStorage.setItem('token', token)
    }
  },
  actions: {
    async loginSuccess(context, value){
      try {
        const response = await http.post('/login', value )
        const token = response.data.token
        context.commit('LOGIN_SUCCESS', token)
      } catch (error) {
        alert('co lo say ra')
      }

    }
    
  },
  getters: {},
};

export default auth;
