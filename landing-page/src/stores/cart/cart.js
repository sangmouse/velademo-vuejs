import http from "../../api/request";
import { arraymove } from "../../components/comon/common";

const cart = {
  state: {
    visibleCart: false,
    cart: [],
  },
  mutations: {
    UPDATE_CART_CURRENT(state, data) {
      state.cart = data;
    },
    ISVISIBLE_CART(state) {
      state.visibleCart = true;
    },
    CLOSE_CART(state) {
      state.visibleCart = false;
    },
    ADD_PRODUCT_ONE(state, data) {
      const index = state.cart.findIndex((item) => item.id === data.id);
      if (index === -1) {
        state.cart.unshift(data);
      } else {
        state.cart[index].quantity = state.cart[index].quantity + 1;
        if (state.cart.length > 1) {
          arraymove(state.cart, index, 0);
        }
      }
    },
    ADD_PRODUCT_DETAIL(state, payload) {
      const index = state.cart.findIndex((item) => item.id === payload.id);
      if (index === -1) {
        state.cart.unshift(payload.data);
      } else {
        state.cart[index].quantity =
          state.cart[index].quantity + payload.data.quantity;
        if (state.cart.length > 1) {
          arraymove(state.cart, index, 0);
        }
      }
    },
    DELETE_ITEM_CART(state, id) {
      const index = state.cart.findIndex((item) => item.id === id);
      state.cart.splice(index, 1);
    },
  },
  actions: {
    async updateCartCurrent(context) {
      try {
        const token = localStorage.getItem("token");
        const response = await http.get("/api/cart/62", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = response;
        context.commit("UPDATE_CART_CURRENT", data);
      } catch (error) {
        console.log("chua co du lieu trong gio hang");
      }
    },
    async updateCart(_, data) {
      try {
        const dataUdpateCart = data?.map((item) => ({
          id: item?.id,
          count: item?.quantity,
        }));
        const dataSubmit = {
          userid: 62,
          productRequestList: dataUdpateCart,
        };
        console.log(dataUdpateCart);
        const token = localStorage.getItem("token");
        const response = await http.post(`/api/cart/add`, dataSubmit);
        console.log(response, "response");
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {},
};

export default cart;
