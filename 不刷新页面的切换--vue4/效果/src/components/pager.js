const template = `
<div id="pager" class="pager">
<a class="pager-item" :class="{disabled: current === 1}" @click="changePage(1)">首页</a>
<a class="pager-item" :class="{disabled: current === 1}" @click="changePage(current-1)">上一页</a>
<span class="pager-text">
<i>{{current}}</i> 
/ 
<i>{{pageNumber}}</i></span>
<a class="pager-item" :class="{disabled: current === pageNumber}" @click="changePage(current+1)">下一页</a>
<a class="pager-item" :class="{disabled: current === pageNumber}" @click="changePage(pageNumber)">尾页</a>
</div>
`;

export default {
    template,
    props: [
        "total",
        "current",
        "limit"
    ],
    computed: {
        pageNumber() {
            return Math.ceil(this.total / this.limit)
        }
    },
    methods: {
        changePage(newPage) {
            if (newPage < 1) {
                newPage = 1;
            }
            else if (newPage > this.pageNumber) {
                newPage = this.pageNumber;
            }
            if (newPage === this.value) {
                return;
            }
            this.$emit("page-change", newPage);
        }
    }
}