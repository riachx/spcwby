import React from 'react';
import '../styles/components/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <span>SPACECOWBOY INC. </span>
      <a href="https://www.instagram.com/spacecowboy.inc" target="_blank" rel="noopener noreferrer" className="footer-link">
        <img src="https://i.imgur.com/0Gj1oMS.png" alt="Logo" className="footer-logo" />
      </a>
    </footer>
  );
};

export default Footer;
