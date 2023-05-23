import React from 'react';
import "./QuickView.css";
import CancelIcon from '@mui/icons-material/Cancel';

function QuickView({bannerStyle,movie,popup,popupStatut}) {
  return (
    <div className={`QuickView ${popupStatut && "open"}`}>
      <div className='QuickView-banner'style={bannerStyle}>
         <div className='QuickView-content'>
            <h3 className='QuickView-title'>{movie?.title || movie?.name || movie?.original_title}</h3>
            <p>{movie?.overview}
            </p>
          <h3>{movie?.release_date}</h3> 
         </div>
         <button className='QuickView-close' onClick={popup}><CancelIcon fontSize='large'/></button>
      </div>
    </div>
  )
}

export default QuickView
