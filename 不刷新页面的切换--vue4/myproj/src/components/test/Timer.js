var template = `
<div>
  <h1>{{value}}</h1>
</div>
`;

export default {
  template,
  props: ["value"],
  created() {
    //开启计时器
    var timer = setInterval(() => {
      //子组件表达了一个美好的愿望，希望父组件更新数据
      this.$emit("input", this.value - 1);
      if (this.value === 1) {
        clearInterval(timer);
        console.log("计时器停止了");
      }
    }, 1000);
  }
};
