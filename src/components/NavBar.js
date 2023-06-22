import React from 'react';
import { Text } from '@react-three/drei';
import '../App.css';


function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
      <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">EVENTS</a>
        </li>
        <li>
          <a href="#">GALLERY</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;