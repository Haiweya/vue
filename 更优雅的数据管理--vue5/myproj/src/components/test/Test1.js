var template = `
  <div>
    <p>
      p1:{{p1}}
    </p>
    <p>
      p2:{{p2}}
    </p>
    <p>
      p3.length: {{p3.length}}
    </p>
  </div>
`;

export default {
  props: {
    p1: Number,
    p2: {
      type: Number,
      default: 10
    },
    p3: {
      type: Array,
      default: ()=>[]
    }
  },
  template
};
