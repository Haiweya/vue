const template = `
    <nav>
        <router-link :to="{name:'home'}">首页</router-link>
        <router-link :to="{name:'movie-list'}">电影页</router-link>
        <span style="float:right">在线人数：{{number}}</span>
    </nav>
`;

export default {
  template,
  computed: Vuex.mapState("online", ["number"])
};
