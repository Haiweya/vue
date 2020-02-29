import Home from "./pages/Home.js";
import MovieList from "./pages/MovieList.js";
import Movie from "./pages/Movie.js";

export default new VueRouter({
  mode: "hash",
  routes: [
    //配置多条路由规则
    {
      //规则1
      name: "home", // 规则名称，随便取一个容易记忆的名称，可以不写
      path: "/", // 当匹配到路径 / 时
      component: Home // 在 router-view 位置渲染 Home 组件
    },
    {
      //规则2
      name: "movie-list", // 规则名称，随便取一个容易记忆的名称，可以不写
      path: "/movielist", // 当匹配到路径 /movie 时
      component: MovieList // 在 router-view 位置渲染 Movie 组件
    },
    {
      name: "movie-detail",
      path: "/movie/:id",
      component: Movie
    }
  ]
});
