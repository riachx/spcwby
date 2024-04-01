// CardGrid.js
import React from 'react';
import '../App.css'; // Import the stylesheet

const CardGrid = ({ images }) => {
  const handleCardClick = (image) => {
    console.log("Clicked on image:", image);
  };

  return (
    <div className="card-grid"> {/* Use the card-grid class */}
      {images.map((image, index) => (
        <div key={index} onClick={() => handleCardClick(image)} className="card"> {/* Use the card class */}
          <img src={image.src} alt={image.alt} style={{ width: '100%', height: 'auto' }} />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
