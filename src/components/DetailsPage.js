import React, { useState, useEffect } from 'react';
import axios from 'axios';



function DetailsPage({ title, fetchUrl, isPoster}) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const API_KEY = "4240e7da39873170079a5f885484c82f";
const [similarMovies, setSimilarMovies] = useState([]);
  const handleImageClick = async (movie) => {
    setSelectedMovie(movie);
    const similarRequest = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie.id}/similar?api_key=${API_KEY}`
    );
    setSimilarMovies(similarRequest.data.results);
  };

  const handleCloseClick = () => {
    setSelectedMovie(null);
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
    <div className="DetailsPage">
      <h2 className="DetailsPage-title">{title}</h2>
      <div className="DetailsPage-images">
        {movies.map((movie) => (
          <div key={movie.id} className="image-container">
            <img
              src={`https://image.tmdb.org/t/p/original${
                isPoster ? movie.poster_path : movie.backdrop_path
              }`}
              className="DetailsPage-image"
              alt={movie?.title || movie?.name || movie?.original_title}
              onClick={() => handleImageClick(movie)}
              onMouseEnter={() => console.log(movie.overview)}
            />
            <div className="image-description">
              <p>{movie.original_title}</p>
              <p>{movie.original_language}</p>
              <p>{movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>


      {selectedMovie && (
        <div className="selected-movie">
          <div className="selected-movie-image">



          <button style={bouton}  onClick={handleCloseClick}>Close</button> 

            <img
              src={`https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`}
              alt={selectedMovie?.title || selectedMovie?.name || selectedMovie?.original_title}
            />
            <div className="selected-movie-info">
            <img
        src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
        alt={selectedMovie.title}/>
    
              <h3>{selectedMovie.title}</h3>
              <p>{selectedMovie.overview}</p>
              <p>Release date: {selectedMovie.release_date}</p>
              <p>Rating: {selectedMovie.vote_average}</p>
            

            </div>
          </div>
          {similarMovies.length > 0 && (
            <div className="similar-movies">
              <h3>Similar Movies</h3>
              <div className="DetailsPage-images">
                {similarMovies.map((movie) => (
                  <div key={movie.id} className="image-container">
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      className="DetailsPage-image"
                      alt={movie?.title || movie?.name || movie?.original_title}
                      onClick={() => handleImageClick(movie)}
                      onMouseEnter={() => console.log(movie.overview)}
                    />
                    <div className="image-description">
                      <p>{movie.original_title}</p>
                      <p>{movie.original_language}</p>
                      <p>{movie.release_date}</p>
                    </div>  
  
                  </div>
                ))}
              </div>
            </div>
          )}
      
        </div>
      )}


      
    </div>
  );
}

export default DetailsPage
