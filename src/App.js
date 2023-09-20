import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Body from './components/Body';
import Gallery from './components/HomeGallery';
import Events from './components/Events'; // Correct the import path for AboutPage

function App() {
    return (
        <Router>
            <div className="bodySection">
                {/* Define routes for different pages */}
                <Routes>
                    <Route exact path="/" element={<Body />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/about" element={<Events />} />
                </Routes>
                {/* Footer or other components */}
            </div>
        </Router>
    );
}

export default App;
