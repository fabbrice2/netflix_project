import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Row.css';
import { Link } from 'react-router-dom';




function Row({ title, fetchUrl, isPoster }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [ setSimilarMovies] = useState([]);
  const API_KEY = "4240e7da39873170079a5f885484c82f";

  const handleImageClick = async (movie) => {
    setSelectedMovie(movie);
    const similarRequest = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie.id}/similar?api_key=${API_KEY}`
    );
    setSimilarMovies(similarRequest.data.results);
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  

  const bouton = {
    color: "red",
  }



  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-images">
        {movies.map((movie) => (
          <div key={movie.id} className="image-container">
            <Link to={`/details/${movie?.id}`} >
            <img
              src={`https://image.tmdb.org/t/p/original${
                isPoster ? movie.poster_path : movie.backdrop_path
              }`}
              className="row-image"
              alt={movie?.title || movie?.name || movie?.original_title}
              onClick={() => handleImageClick(movie)}
              onMouseEnter={() => console.log(movie.overview)}
            />
            </Link>
          </div>
        ))}
      </div>




      
    </div>
  );
}

export default Row

