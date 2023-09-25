import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './components/Body';
import Gallery from './components/HomeGallery';
function App() {
    return (
        <Router>
            <div className="bodySection">
                {/* Define routes for different pages */}
                <Routes>
                    <Route exact path="/" element={<Gallery />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/events" element={<Gallery />} />
                </Routes>
                {/* Footer or other components */}
            </div>
        </Router>
    );
}

export default App;
