const template = `
<div style="text-align:center">
<h1 style="text-align:center">首页</h1>
<p>
<button @click="handleReduce">-</button>
在线人数：{{number}}
<button @click="handleAdd">+</button>
</p>
</div>
`;

export default {
  template,
  computed: Vuex.mapState("online", ["number"]),
  methods: {
    handleAdd() {
      this.$store.commit("online/add")
    },
    handleReduce(){
      this.$store.commit("online/reduce")
    }
  }
};
