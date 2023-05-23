import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import './Comédie.css'

const Comédie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        'https://api.themoviedb.org/3/discover/movie?api_key=4758eeeb96231cd3729d2efa7a41f4fc&with_genres=35',
      );
      setMovies(response.data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div>
        <Nav />
        <div className='Comédies'>
        <h1>Comédie Page</h1>
      <div className='comédie'>
      {movies.map((movie) => (
        <img key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      ))}
      </div>
        </div>
    </div>
  );
};

export default Comédie;
