import React from 'react';
import '../NavBar.css';

const Navbar2 = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href = "/"><img src= 'https://i.imgur.com/kVp6nXu.png'></img></a>
        {/*<h3>SPCWBY</h3>*/}
      </div>
      <div className="navbar-links">
        <ul>
          <li><a href="/events">EVENTS</a></li>
          <li><a href="/gallery">GALLERY</a></li>
          <li><a href="/artists">ARTISTS</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar2;
