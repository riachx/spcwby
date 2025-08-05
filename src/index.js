import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <App />
    <Footer />
  </React.StrictMode>
);

