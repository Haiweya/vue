var template = `
<div class="pager" v-if="total>0">
  <a @click.prevent="handleAClick(1)" href="" class="pager-item" :class="current===1?'disabled':''">首页</a> 
  <a @click.prevent="handleAClick(current-1)" class="pager-item" :class="current===1?'disabled':''">上一页</a> 
  <span class="pager-text">
    <i>{{current}}</i> 
    / 
    <i>{{pageNumber}}</i>
  </span> 
  <a @click.prevent="handleAClick(current+1)" class="pager-item" :class="current===pageNumber?'disabled':''">下一页</a> 
  <a @click.prevent="handleAClick(pageNumber)" class="pager-item" :class="current===pageNumber?'disabled':''">尾页</a>
</div>
`;

export default {
  template,
  props: {
    current: {
      //当前页码
      default: 1,
      type: Number
    },
    total: {
      //总的数据量
      default: 0,
      type: Number
    },
    limit: {
      //页容量：每页显示多少条数据
      default: 10,
      type: Number
    }
  },
  computed: {
    //总页数
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    }
  },
  methods: {
    handleAClick(newPage) {
      if (newPage < 1 || newPage > this.pageNumber || newPage === this.current) {
        return;
      }
      this.$emit("page-change", newPage)
    }
  }
};
