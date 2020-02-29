import MovieList from "./movieList.js";
import movieService from "../services/movieService.js";

var template = `
<div>
  <movie-list :datas="movies"></movie-list>
</div>
`;

export default {
  components: {
    MovieList
  },
  data() {
    return {
      total: 0,
      movies: [],
      page: 1,
      limit: 10
    };
  },
  mounted() {
    this.getMovies();
  },
  methods:{
    async getMovies(){
      var resp = await movieService.getMovies(this.page, this.limit);
      this.movies = resp.data;
      this.total = resp.count;
    }
  },
  template
};
