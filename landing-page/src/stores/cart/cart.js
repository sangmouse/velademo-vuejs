import http from "../../api/request";

const cart = {
  state: {
    visibleCart: false,
    cart: [],
  },
  mutations: {
    ISVISIBLE_CART(state) {
      state.visibleCart = true;
    },
    CLOSE_CART(state) {
      state.visibleCart = false;
    },
    ADD_PRODUCT_ONE(state, data) {
      const index = state.cart.findIndex((item) => item.id === data.id);
      data.qty = 1
      if (index === -1) {
        state.cart.unshift(data);
      } else {
        alert("san pham da co trong gio hang");
        state.visibleCart = false;
      }
    },
    DELETE_ITEM_CART(state, id) {
      const index = state.cart.findIndex((item) => item.id === id);
      state.cart.splice(index, 1);
    },
  },
  actions: {},
  getters: {},
};

export default cart;
