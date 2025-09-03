import React from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src="https://i.imgur.com/kVp6nXu.png" alt="SPCWBY Logo"></img>
        </a>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <a href="/events">EVENTS</a>
          </li>
          <li>
            <a href="/gallery">GALLERY</a>
          </li>
          <li>
            <a href="/artists">ARTISTS</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
