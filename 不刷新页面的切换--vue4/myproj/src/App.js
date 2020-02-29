// 新建一个组件

var template = `
<div>
  <header>
    <router-link :to="{name:'home'}">首页</router-link>
    <router-link :to="{name:'movie-list'}">电影页</router-link>
  </header>
  <router-view/>
</div>
`;

// 导出一个组件配置对象
export default {
  template,
  methods:{
    back(){
      this.$router.back();
    }
  }
};
