// 入口模块

// 负责新创建一个vue实例
import App from "./App.js";
new Vue({
  components: {
    App
  },
  el: "#app",
  template: `<App/>`
});
