import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import './Films.css'

const HorrorMoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        'https://api.themoviedb.org/3/discover/movie?api_key=4758eeeb96231cd3729d2efa7a41f4fc&with_genres=27',
      );
      setMovies(response.data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div >
        <Nav />
        <div className='Movies'>
        <h1>movies Page</h1>
        <div className='movie'>
      {movies.map((movie) => (
        <img key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.name} />
      ))}
      </div>
        </div>
    </div>
  );
};

export default HorrorMoviesPage;
