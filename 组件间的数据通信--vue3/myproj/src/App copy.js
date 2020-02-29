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

import Timer from "./components/test/Timer.js";

var template = `<div>
  <Timer v-model="n" />
  
  <h2>
    目前的数字：{{n}}
  </h2>
</div>`;

export default {
  components: {
    Timer
  },
  data() {
    return {
      n: 5
    };
  },
  template
};
