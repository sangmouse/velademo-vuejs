const blog = {
  state: {
    delta: undefined,
    contents: ''
  },
  mutations: {
    SET_DELTA (state, payload) {
          state.delta = payload
      },
      SET_CONTENT (state, payload) {
          state.contents = payload
      }
  },
  getters: {
    delta: ({delta}) => delta,
    contents: ({contents}) => contents
  }
};

export default blog;