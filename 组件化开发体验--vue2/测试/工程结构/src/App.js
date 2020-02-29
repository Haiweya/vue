// 新建一个组件
import ArticleTitle from "./components/ArticleTitle.js";
import ArticleContent from "./components/ArticleContent.js";
var template = `
  <div>
    <button @click="title='川建国离开了印度'">改变title</button>
    <button @click="isShow=!isShow">切换显示</button>
    <ArticleTitle v-if="isShow" :title="title"/>
    <ArticleContent/>
  </div>
`;

// 导出一个组件配置对象
export default {
  data() {
    return {
      title: "川建国同志访问印度",
      isShow: true
    };
  },
  components: {
    ArticleTitle,
    ArticleContent
  },
  template
};
