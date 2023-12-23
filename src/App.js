import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './components/Body';
import Gallery from './components/HomeGallery';
import Events from './components/Events';
import Artists from './components/ComingSoon';

function App() {
    return (
        <Router>
            <div className="bodySection">
                {/* Define routes for different pages */}
                <Routes>
                    <Route exact path="/" element={<Body />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/artists" element={<Artists />} />
                </Routes>
            </div>
        </Router>

        
    );
}

export default App;
