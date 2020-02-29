import movieService from "./movieService.js"

async function test(){
  var resp = await movieService.getMovies(1, 10)
  console.log(resp)
}

test();