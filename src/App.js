import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './components/Body';
import Gallery from './components/HomeGallery';

import Events from './components/Events';
function App() {
    return (
        <Router>
            <div className="bodySection">
                {/* Define routes for different pages */}
                <Routes>
                    <Route exact path="/" element={<Body />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/events" element={<Events />} />
                </Routes>
                {/* Footer or other components */}
            </div>
        </Router>
    );
}

export default App;
