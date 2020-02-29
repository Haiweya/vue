import MovieContainer from "../components/movieContainer.js"
const template = `
<movie-container/>
`;

export default {
    components: {
      MovieContainer
    },
    template,
    mounted(){
      
      console.log(this.$route, this.$router)
    }
}