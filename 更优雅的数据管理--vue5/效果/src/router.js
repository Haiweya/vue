import Home from "./pages/index.js";
import Movie from "./pages/movie.js";
import MovieDetail from "./pages/movieDetail.js";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/movie",
      name: "movie-list",
      component: Movie
    },
    {
      path: "/movie/:id",
      name: "movie-detail",
      component: MovieDetail
    }
  ]
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
