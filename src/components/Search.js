
import React, { useState } from 'react';
import axios from 'axios';
import ImageDisplay from './ImageDisplay';
import './Search.css'
import {Link} from "react-router-dom"


function Search() {
  const [query, setQuery] = useState('');
  const [imageUrls, setImageUrls] = useState(null);
  const [searchState, setSearchState] = useState('idle');

  const handleSearch = async () => {
    setSearchState('loading');
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=4758eeeb96231cd3729d2efa7a41f4fc&query=${query}`
      );
      const results = response.data.results;
      if (results.length === 0) {
        setSearchState('done');
        setImageUrls(null);
      } else {
        const urls = results.map((result) =>
          `https://image.tmdb.org/t/p/w500/${result.poster_path}`
        );
        setSearchState('done');
        setImageUrls(urls);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    if (newQuery === '') {
      setSearchState('idle');
      setImageUrls(null);
    } else {
      handleSearch();
    }
  };

  let message;
  if (searchState === 'loading') {
    message = 'Recherche en cours...';
  } else if (searchState === 'done' && imageUrls === null) {
    message = 'Aucun résultat trouvé.';
  }

  return (
    <div className='Search'>
      <div className='search'>
      <Link to="/home"><span class="material-symbols-outlined" >arrow_back</span></Link>
        <div className='search_box'>
          <span class="material-symbols-outlined" onClick={handleSearch}>search</span>
          <input type="text" placeholder='Rechercher' value={query} onInput={handleInputChange}/>
        </div>
      </div>
      <div className='result'>
        {message ? (
          <p>{message}</p>
        ) : (
          <ImageDisplay imageUrls={imageUrls} />
        )}
      </div>
      
    </div>
  );
}

export default Search;