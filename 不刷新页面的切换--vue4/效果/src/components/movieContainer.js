import MovieList from "./movieList.js";
import Pager from "./pager.js";
import Loading from "./loading.js";
import movieService from "../services/movieService.js";

var template = `
<div>
  <movie-list :datas="movies"></movie-list>
  <pager :current="page" :limit="limit" :total="total" @page-change="handlePageChange"/>
  <loading :show="loading"/>
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
      total: 0,
      movies: [],
      page: 1,
      limit: 3,
      loading: false
    };
  },
  mounted() {
    this.getMovies();
  },
  methods: {
    async getMovies() {
      this.loading = true;
      var resp = await movieService.getMovies(this.page, this.limit);
      this.movies = resp.data;
      this.total = resp.count;
      this.loading = false;
    },
    handlePageChange(newPage) {
      this.page = newPage;
      this.getMovies();
    }
  },
  template
};
