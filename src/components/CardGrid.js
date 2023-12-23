import React from 'react';

class Card extends React.Component {
  render() {
    const { imageSrc1, imageSrc2, onClick } = this.props;
    return (
      <div className="card" onClick={onClick}>
        <img src={imageSrc1} alt="Artist 1" />
        <img className="headshot" src={imageSrc2} alt="Artist 2" />
      </div>
    );
  }
}

class CardGrid extends React.Component {
  handleCardClick(index) {
    alert(`Card ${index + 1} clicked!`);
  }

  render() {
    const { cards } = this.props;
    return (
      <div className="card-grid">
        {cards.map((images, index) => (
          <Card
            key={index}
            imageSrc1={images[0]}
            imageSrc2={images[1]}
            onClick={() => this.handleCardClick(index)}
          />
        ))}
      </div>
    );
  }
}

export default CardGrid;
