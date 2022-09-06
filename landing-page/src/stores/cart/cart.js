
import http from "../../api/request";

const cart = {
  state: {
   visibleCart: false
  },
  mutations: {
    ISVISIBLE_CART(state){
        state.visibleCart = true
    },
    CLOSE_CART(state){
        state.visibleCart = false
    }
    
  },
  actions: {
   
  },
  getters: {},
};

export default cart;
