import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import {Canvas} from '@react-three/fiber';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <div className="bg" />
    <NavBar />
      <App />

      <Footer />
      </>
  </React.StrictMode>
);

