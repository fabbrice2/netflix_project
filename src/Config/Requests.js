//https://api.themoviedb.org/3

//clé 4240e7da39873170079a5f885484c82f

// import axios from "axios";

const API_KEY = "4240e7da39873170079a5f885484c82f";




const requests = {
  fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTrending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US&page=1`,
  
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
 fetchActionMovie: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=28&page=1`,
 fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=35&page=1`,

 fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=27&page=1`,

 fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10749&page=1`,

 fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=99&page=1`,

};


export default requests;
