import React from 'react';
import CardGrid from './CardGrid';

class Artist extends React.Component {
 render() {
    //const cards = ['Akira', 'Nathan', 'Erika', 'Ross', 'Veyd', 'Will', 'Ria', 'Arya'];
    const cards = [
    ['https://i.imgur.com/zCaKbV3.png', 'https://i.imgur.com/H84owBb.png'],
    ['https://i.imgur.com/zCaKbV3.png', 'https://i.imgur.com/H84owBb.png'],
    ['https://i.imgur.com/zCaKbV3.png', 'https://i.imgur.com/H84owBb.png'],
    ['https://i.imgur.com/zCaKbV3.png', 'https://i.imgur.com/H84owBb.png'],
    ['https://i.imgur.com/zCaKbV3.png', 'https://i.imgur.com/H84owBb.png'],
    ['https://i.imgur.com/zCaKbV3.png', 'https://i.imgur.com/H84owBb.png'],
    ['https://i.imgur.com/zCaKbV3.png', 'https://i.imgur.com/H84owBb.png'],
    ['https://i.imgur.com/zCaKbV3.png', 'https://i.imgur.com/H84owBb.png']
    ];
    return (
      <div className="Artist">
        <CardGrid cards={cards} />
      </div>
    );
 }
}

export default Artist;