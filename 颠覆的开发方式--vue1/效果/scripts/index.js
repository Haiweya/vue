const template = `
<div>
    <table :class="beauty?'beauty-table':''">
        <caption>
            <h1>{{title}}</h1>
            <p>共<strong>{{products.length}}</strong>件商品</p>
            <p>
                <button @click="beauty=!beauty">切换表格样式</button>
            </p>
        </caption>
        <thead>
            <tr>
                <th>商品名称</th>
                <th>商品库存</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in products">
                <td>{{item.name}}</td>
                <td>
                    <button @click="change(item, item.stock-1)">-</button>
                    <span v-if="item.stock===0" class="stock">售罄</span>
                    <span v-else class="stock">{{item.stock}}</span>
                    <button @click="change(item, item.stock+1)">+</button>
                </td>
                <td>
                    <button @click="remove(index)">删除</button>
                </td>
            </tr>
            <tr>
                <td>
                    <input type="text" v-model="newProduct.name" @keydown.enter="addProduct"/>
                </td>
                <td>
                    <input type="number" min="0" v-model.number="newProduct.stock" @keydown.enter="addProduct"/>
                </td>
                <td>
                <button @click="addProduct">添加</button>
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>总计</th>
                <th>{{total}}</th>
                <th></th>
            </tr>
        </tfoot>
    </table>
</div>
`;

const config = {
  data: {
    title: "商品和库存管理",
    products: [
      { name: "小米手机", stock: 10 },
      { name: "华为手机", stock: 5 },
      { name: "iphone", stock: 6 }
    ],
    newProduct: { name: "", stock: 0 },
    beauty: false
  },
  template,
  computed: {
    total() {
      return this.products.reduce((a, b) => a + b.stock, 0);
    }
  },
  methods: {
    addProduct() {
      this.products.push(this.newProduct);
      this.newProduct = {
        name: "",
        stock: 0
      };
    },
    change(item, newStock) {
      if (newStock < 0) {
        newStock = 0;
      }
      item.stock = newStock;
    },
    remove(index) {
      this.products.splice(index, 1);
    }
  }
};
if (1) {
  var a = 1;
}
var app = new Vue(config);
app.$mount("#app");
