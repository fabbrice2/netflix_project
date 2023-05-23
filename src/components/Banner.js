import React, { useEffect, useState } from 'react';
import Row  from './Row.js';



import "./Banner.css"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import QuickView from './QuickView';

import requests from "../Config/Requests";
import axios from 'axios';



// import Annonce from './Annonce';



function Banner() {



    const [movie , setMovie]= useState([]);
    const [popup , setPopup] = useState(false);

function handleClickPopup() {
    popup ? setPopup(false) : setPopup(true); 
}

    useEffect(()=> {
        async function fetchData(){
            const request = await axios.get(requests.fetchTrending);
            console.log(request.data.results);
       

        setMovie(
             request.data.results[
               Math.floor( Math.random() * request.data.results.length - 1)
        ]
        );
    }
    fetchData();
    },[]);

    console.log(popup);

 
    function truncateText(string, n) {
        if (string && string.length > n) {
          return string.substr(0, n - 1) + "...";
        } else {
          return "No description";
        }

    //    return string?.length > n ?  string.substr(0, n - 1) + "..." : "No description";
    } 



const bannerStyle = {
    backgroundImage:`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
}


  return (
    <header className='banner' style={bannerStyle}>
      {/* <div className='banner-content'></div> */}
     <h1 className='banner-title'>{movie?.title || movie?.name || movie?.original_title}</h1>  {/*le ? c'est pour dire s'il existe*/}
     <div className='banner-buttons'>
 <button className='banner-button  button-play'><PlayArrowIcon/>Lecture</button>
 <button className='banner-button'  onClick={handleClickPopup} ><HelpOutlineIcon/> Infos</button>
    </div>
    <p className='banner-description'>{truncateText(movie?.overview , 100)}</p>
    <div className='bottom'></div>



    <QuickView
    bannerStyle={bannerStyle} 
    movie={movie} 
    popup={handleClickPopup}
    popupStatut={popup} />

   

<Row title="Appréciés Sur Netflix" 
     fetchUrl={requests.fetchTopRated} /> 

 <Row  title="Film d'action" 
   fetchUrl={requests.fetchActionMovie} />

 <Row  title="Comedies" 
   fetchUrl={requests.fetchComedyMovies} />

 <Row  title="Films d'horreur" 
   fetchUrl={requests.fetchHorrorMovies} />

   <Row  title="Films Romantiques" 
   fetchUrl={requests.fetchRomanceMovies} />

   <Row  title="Documentaires" 
   fetchUrl={requests.fetchDocumentaries} />





    </header>









  )
}

export default Banner
