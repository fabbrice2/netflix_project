import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import './Séries.css'

const Series = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchSeries = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=4758eeeb96231cd3729d2efa7a41f4fc`);
      setSeries(response.data.results);
    };
    fetchSeries();
  }, []);

  return (
    <div >
        <Nav />
        <div className='Séries'>
        <h1>Series Page</h1>
        <div className='serie'>
      {series.map((serie) => (
        <img key={serie.id} src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt={serie.name} />
      ))}
      </div>
        </div>
    </div>
  );
};

export default Series;
