import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function Loader() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{color:'black'}}>Loading...</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <App />
    <Footer />
  </React.StrictMode>
);

