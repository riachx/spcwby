// CardGrid.js
import React from 'react';
import '../../App.css';

const CardGrid = ({ images }) => {
  const handleCardClick = image => {
    console.log('Clicked on image:', image);
  };

  return (
    <div className="card-grid">
      {images.map((image, index) => (
        <div
          key={index}
          onClick={() => handleCardClick(image)}
          className="card"
        >
          <img
            src={image.src}
            alt={image.alt}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
