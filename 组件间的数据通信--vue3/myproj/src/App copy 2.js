// // 新建一个组件
// import MovieContainer from "./components/MovieContainer.js";
// var template = `
// <MovieContainer/>
// `;

// // 导出一个组件配置对象
// export default {
//   components: {
//     MovieContainer
//   },
//   template
// };

import Loading from "./components/test/Loading.js";

var template = `<div>
  <Loading :isShow="isShow"></Loading>
</div>`;

export default {
  components: {
    Loading
  },
  data() {
    return {
      isShow: false
    };
  },
  template
};
