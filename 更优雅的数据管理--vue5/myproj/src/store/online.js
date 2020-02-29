export default {
  namespaced: true,
  state: {
    number: 0
  },
  mutations: {
    // state表示之前的状态
    // mutation名称为：increase
    increase(state) {
      state.number++;
    },
    // mutation名称为：decrease
    decrease(state) {
      if (state.number === 0) {
        return;
      }
      state.number--;
    }
  },
  actions: {
    asyncIncrease(context){
      setTimeout(() => {
        context.commit("increase")
      }, 1000);
    },
    asyncDecrease(context){
      setTimeout(() => {
        context.commit("decrease")
      }, 1000);
    }
  }
};