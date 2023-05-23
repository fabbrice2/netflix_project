import React, { useState, useEffect } from 'react';

import { useParams,Link } from 'react-router-dom';

import './Details.css'

 

const Details = () => {

  const { id } = useParams();

  const [movie, setMovie] = useState({});


  const [similarMovies, setSimilarMovies] = useState([]);

 

  const API_KEY = '4240e7da39873170079a5f885484c82f';

  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

  const BASE_URL = 'https://api.themoviedb.org/3';

 

  useEffect(() => {

    const fetchMovie = async () => {

      const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;

      const res = await fetch(url);

      const data = await res.json();

      setMovie(data);

    };


    const fetchSimilarMovies = async () => {

      const url = `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`;

      const res = await fetch(url);

      const data = await res.json();

      setSimilarMovies(data.results);

    };

    fetchMovie();

    fetchSimilarMovies();

  }, [id]);

 

  return (
    <div className='details'> 
    
    <div className='movie-detail'>

      <Link to='/home' >

      <div className='close'><span class="material-symbols-outlined">close</span></div>

      </Link>

      <div className='movie-poster'>

        <img src={IMG_PATH + movie.poster_path} alt={movie.title} />
        <div className='fade-bottom' ></div>

        <ul className='movie-rating'>

        <li className='title' >{movie.title}</li>

        <ul className='btn'>
          <li>Play<span class="material-symbols-outlined">play_arrow</span></li>
          <li>Add</li>
          <li>Rate</li>
        </ul>

        <ul className='link'>
          <li>Description</li>
          <li>Episodes</li>
        </ul>

        <li className='resume'>{movie.overview}</li>

        </ul>

      </div>

      <div className='movie-info'>
          <h3 className='similar'>Similar Movies</h3>

          <div className='similar-movies'>

          {similarMovies.slice(0, 5).map((movie) => (

            <div className='similar-movies__movie' key={movie.id}>

              <Link to={`/movie/${movie.id}`} key={movie.id}>

              <img src={IMG_PATH + movie.poster_path} alt={movie.title} />

              <h4>{movie.title}</h4>

              </Link>

              </div>

          ))}

          </div>

        </div>

    </div>
    </div>
  );

};

 

export default Details;