export default {
  namespaced: true,
  state: {
    number: 0
  },
  mutations: {
    add(state) {
      state.number++;
    },
    reduce(state) {
      if(state.number>0){
        state.number--;
      }
    }
  }
};
