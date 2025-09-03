import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import Footer from './components/Footer.jsx';
import NavBar from './components/NavBar.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <App />
    <Footer />
  </React.StrictMode>
);
