//该组件仅用于获取电影数据

import MovieList from "./MovieList.js";
import movieService from "../service/movieService.js";
import Pager from "./Pager.js";
import Loading from "./Loading.js"
var template = `
  <div>
    <MovieList :movies="movies"/>
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
  data() {
    return {
      movies: [],
      total: 0, //总数据量
      limit: 3, //页容量
      page: 1, //当前页码
      isLoading: false //是否正在远程加载数据
    };
  },
  async created() {
    //获取电影数据
    this.getMovies();
  },
  methods: {
    handlePageChange(newPage) {
      this.page = newPage;
      this.getData();
    },
    async getMovies(){
      this.isLoading = true;
      var resp = await movieService.getMovies(this.page, this.limit);
      this.movies = resp.data;
      this.total = resp.count;
      this.isLoading = false;
    }
  },
  template
};
