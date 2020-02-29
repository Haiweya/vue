//该组件仅用于获取电影数据

import MovieList from "./MovieList.js";
import movieService from "../service/movieService.js"
var template = `
  <MovieList :movies="movies"/>
`;

export default {
  components: {
    MovieList
  },
  data() {
    return {
      movies: []
    };
  },
  async created() {
    //获取电影数据
    var resp = await movieService.getMovies(1, 10)
    this.movies = resp.data
  },
  template
};
