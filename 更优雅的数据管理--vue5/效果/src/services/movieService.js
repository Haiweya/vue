export default {
  async getMovies(page, limit) {
    var url = `http://yuanjin.tech:5005/api/movie?page=${page}&limit=${limit}`;
    var datas = await fetch(url).then(resp => resp.json());
    return datas;
  },
  async getMovie(id) {
    var url = `http://yuanjin.tech:5005/api/movie/${id}`;
    var datas = await fetch(url).then(resp =>
      resp.json()
    );
    return datas;
  }
};
