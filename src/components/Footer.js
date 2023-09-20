import React from 'react';

const Footer = () => {
  const footerStyle = {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '20px',
    backgroundColor: '#000',
    color: '#fff',
    padding: '40px 0',
    display: 'flex',
    alignItems: 'center', // Vertically center content
    justifyContent: 'center', // Horizontally center content
    
  };

  const logoStyle = {
    width: '20px', // Adjust the width of the logo as needed
    height: '20px', // Adjust the height of the logo as needed
    marginLeft: '0px', // Add some spacing between text and logo
    padding:'0%',
    
  };

  return (
    <footer style={footerStyle}>
      <span>SPACECOWBOY INC.</span>
      <a href={"https://www.instagram.com/spacecowboy.inc"} target="_blank" rel="noopener noreferrer" style={{padding:'0%'}}>
        <img src="./photos/instagram-logo.png" alt="Logo" style={logoStyle} />
      </a>
    </footer>
  );
};

export default Footer;
