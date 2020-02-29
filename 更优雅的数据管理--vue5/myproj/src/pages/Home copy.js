// 加count: onlineNumber+movies.page
// var obj = Vuex.mapState(["onlineNumber", "movies"])
// obj.count = function(){
//   return this.onlineNumber + this.movies.page
// }
export default {
  template: `<div style="padding:100px">
  <h1> 在线人数：{{onlineNumber}}</h1>
   <p>
    当前页码：{{movies.page}}
   </p>
   <p>
    {{count}}
   </p>
  </div>`,
  computed: {
    ...Vuex.mapState(["onlineNumber", "movies"]),
    count() {
      return this.onlineNumber + this.movies.page;
    }
  }
};
