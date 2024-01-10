import React from 'react';
import { Text } from '@react-three/drei';
import '../App.css';

function NavBar() {
  return (
    
    <nav className="navbar">

      <div className="left-text">
      <div><p className="line">|</p></div>
      <p className="low-opacity">WEST COAST</p>
        <p>ELECTRONIC MUSIC</p>
        <p>+ ART COLLECTIVE</p>
      </div>
      <ul className="nav-links">
      <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/events">EVENTS</a>
        </li>
        <li>
          <a href="/gallery">GALLERY</a>
        </li>
      </ul>
    </nav>
    
  );
}

export default NavBar;