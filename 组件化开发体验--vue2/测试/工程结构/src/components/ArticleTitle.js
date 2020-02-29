var template = `
<div>
<h1>{{title}}</h1>
<h2>{{a}}</h2>
</div>
`;

export default {
  props: ["title"],
  data() {
    return {
      a: 1,
      b: 2
    };
  },
  template,
  beforeCreate() {
    console.log("before Create");
  },
  created() {
    // console.log("created开始")
    // var n;
    // for (var i = 1; i < 100000000; i++) {
    //   n = Math.random();
    // }
    // console.log("created完成")
  },
  mounted() {
    setTimeout(() => {
      console.log("mounted开始");
      var n;
      for (var i = 1; i < 100000000; i++) {
        n = Math.random();
      }
      console.log("mounted完成");
    }, 0);
  },
  updated() {
    console.log("组件更新了");
  }
};
