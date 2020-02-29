import movieService from "../service/movieService.js";

export default {
  namespaced: true,
  state: {
    // 电影数据
    data: [],
    total: 0,
    page: 1,
    limit: 3,
    isLoading: false
  },
  mutations: {
    /**
     * setPage: mutation的名称
     * oldState: 原来的状态
     * payload: 载荷。为了变化新状态，需要的额外信息
     */
    setPage(oldState, payload) {
      oldState.page = payload.page;
    },
    setResp(oldState, payload) {
      oldState.data = payload.data;
      oldState.total = payload.total;
    },
    setIsLoading(oldState, payload) {
      oldState.isLoading = payload.isLoading;
    }
  },
  actions: {
    async fetchMovies(context) {
      context.commit("setIsLoading", { isLoading: true });
      var resp = await movieService.getMovies(
        context.state.page,
        context.state.limit
      );
      context.commit("setResp", { data: resp.data, total: resp.count });
      context.commit("setIsLoading", { isLoading: false });
    }
  }
};
