import Movie from "./movie.js";

const template = `
<div class="data-container">
    <movie v-for="item in datas" :data="item" :key="item.id" />
</div>
`;

export default {
  props: ["datas"],
  components: { Movie },
  template
};
