import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './components/Footer';
import Header from './components/Header';
import {Canvas} from '@react-three/fiber';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>

    <Header />
      <App />

      <Footer />
      </>
  </React.StrictMode>
);

