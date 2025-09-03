import React from 'react';
import { artistImages } from '../../data/artistImages';
import MeetUsLogo from '../MeetUsLogo.jsx';
import TwinklingStar from '../shapes/stars/TwinklingStar.jsx';
import CardGrid from './CardGrid.jsx';

class Artist extends React.Component {
  render() {
    const images = artistImages;
    return (
      <div className="Artist">
        <div
          className="MeetUs"
          style={{
            zIndex: '-5',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            marginLeft: '10vh',
            marginTop: '-40vh',
          }}
        >
          <MeetUsLogo />
          <TwinklingStar marginLeft="20vh" marginTop="13vh"></TwinklingStar>
          <TwinklingStar marginLeft="-110vh" marginTop="2vh"></TwinklingStar>
        </div>
        <div>
          <CardGrid images={images} />
        </div>
      </div>
    );
  }
}

export default Artist;
