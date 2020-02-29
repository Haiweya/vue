var myComp = {
  data() {
    return {};
  },
  methods: {},
  computed: {},
  template: `
    <h1>这是一个组件</h1>
  `
};

//全局注册一个组件，其他任何组件都可以使用它了，名字叫做：my-comp
Vue.component("my-comp", myComp);

var myComp2 = {
  template: `
    <div>
      <h2>另外一个组件</h2>
      <my-comp/>
    </div>
  `
}

Vue.component("my-comp2", myComp2);

new Vue({
  el: "#app",
  template:`
    <div>
      <my-comp/>
      <my-comp2/>
    </div>
  `
});
