// var func = function(a, b) {
//   return a + b;
// };

// var func2 = (a, b) => {
//   return a + b;
// };

// var func3 = a => a + 1;

// console.log(func3(3));

var obj = {
  a: 1,
  start() {
    // this -> obj
    setTimeout(() => {
      console.log(this);
      this.a++;
      console.log(this.a);
    }, 1000);
  }
};

obj.start();
