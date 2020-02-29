import MovieDetail from "../components/MovieDetail.js";
import movieService from "../service/movieService.js";
var template = `
<div>
  <div class="data-container">
    <button @click="$router.back()">回到列表页</button>
  </div>
  <MovieDetail :movie="movie"/>
</div>
`;

export default {
  template,
  components: {
    MovieDetail
  },
  data() {
    return {
      movie: null
    };
  },
  async created() {
    var movieId = this.$route.params.id;
    console.log(this.$route)
    var resp = await movieService.getMovie(movieId);
    console.log(resp.data)
    this.movie = resp.data;
  }
};
