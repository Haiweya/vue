var template = `
<div>
  <h1>{{n}}</h1>
</div>
`;

export default {
  template,
  data() {
    return {
      n: 5
    };
  },
  created() {
    //开启计时器
    var timer = setInterval(() => {
      this.n--;
      if (this.n === 0) {
        clearInterval(timer); //停止
        console.log("计时器停止了");
        //要干嘛？我也不知道
        // 触发事件
        this.$emit("timer-over", this.n)
      }
    }, 1000);
  }
};
