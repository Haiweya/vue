import movies from "./movies.js"
import online from "./online.js"

export default new Vuex.Store({
  // 配置
  modules: {
    movies,
    online
  }
});
