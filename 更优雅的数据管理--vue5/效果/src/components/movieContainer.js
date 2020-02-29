import MovieList from "./movieList.js";
import Pager from "./pager.js";
import Loading from "./loading.js";

var template = `
<div>
  <movie-list :datas="datas"></movie-list>
  <pager :current="page" :limit="limit" :total="total" @page-change="handlePageChange"/>
  <loading :show="isLoading"/>
</div>
`;
export default {
  components: {
    MovieList,
    Pager,
    Loading
  },
  computed:Vuex.mapState("movies",["total","page","datas","isLoading", "limit"]),
  mounted() {
    this.$store.dispatch("movies/fetch");
  },
  methods: {
    handlePageChange(newPage) {
      this.$store.commit("movies/setState", {page:newPage});
      this.$store.dispatch("movies/fetch");
    }
  },
  template
};
