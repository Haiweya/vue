var MyComp = {
  data() {
    return {};
  },
  methods: {},
  computed: {},
  template: `
    <h1>这是一个组件</h1>
  `
};

var MyComp2 = {
  components: {
    MyComp
  },
  template: `
    <div>
      <h2>另外一个组件</h2>
      <my-comp/>
    </div>
  `
};

new Vue({
  el: "#app",
  components: {
    MyComp,
    MyComp2
  },
  template: `
    <div>
      <my-comp></my-comp>
      <my-comp2 />
      <MyComp2 />
    </div>
  `
});
