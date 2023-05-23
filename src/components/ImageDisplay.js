import React from 'react';
import "./ImageDisplay.css";

function ImageDisplay(props) {
  if (!props.imageUrls) {
    return null; // ou une alternative appropriée
  }

  return (
    <div className='img'>
      {props.imageUrls.map((url) => (
        <img key={url} src={url} alt="Image" />
      ))}
    </div>
  );
}

export default ImageDisplay;
