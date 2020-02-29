import App from "./app.js";
import router from "./router.js";

const template = `<app/>`;

const config = {
  el: "#app",
  components: {
    App
  },
  template,
  router
};

new Vue(config);
