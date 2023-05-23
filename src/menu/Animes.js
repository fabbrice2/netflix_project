import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import './Animes.css'

const Animes = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      const response = await axios.get(
        'https://api.themoviedb.org/3/discover/tv?api_key=4758eeeb96231cd3729d2efa7a41f4fc&with_genres=16',
      );
      setAnimes(response.data.results);
    };
    fetchAnimes();
  }, []);

  return (
    <div>
        <Nav />
        <div className='Animes'>
        <h1>Anime Page</h1>
        <div className='serie'>
        {animes.map((anime) => (
        <img key={anime.id} src={`https://image.tmdb.org/t/p/w500${anime.poster_path}`} alt={anime.name} />
      ))}
        </div>
        </div>
    </div>
  );
};

export default Animes;
