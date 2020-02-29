//该组件仅用于获取电影数据

import MovieList from "./MovieList.js";
import Pager from "./Pager.js";
import Loading from "./Loading.js";
var template = `
  <div>
    <MovieList :movies="data"/>
    <Pager @page-change="handlePageChange" :total="total" :limit="limit" :current="page"/>
    <Loading :isShow="isLoading"/>
  </div>
`;

export default {
  components: {
    MovieList,
    Pager,
    Loading
  },
  computed: Vuex.mapState("movies", [
    "page",
    "limit",
    "total",
    "data",
    "isLoading"
  ]),
  async created() {
    //获取电影数据
    this.getMovies();
  },
  methods: {
    handlePageChange(newPage) {
      this.$store.commit("movies/setPage", { page: newPage });
      this.getMovies();
    },
    getMovies() {
      this.$store.dispatch("movies/fetchMovies");
    }
  },
  template
};
