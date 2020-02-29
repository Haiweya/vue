// 入口模块

// 负责新创建一个vue实例
import App from "./App.js";
import router from "./router.js";
import store from "./store/index.js";

new Vue({
  components: {
    App
  },
  store,
  router, //将路由的功能嵌入到了vue实例中
  el: "#app",
  template: `<App/>`
});
