import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './styles/typography.css';
import Body from './components/home/Body';
import Gallery from './components/gallery/Gallery';
import Events from './components/events/Events';
import Artists from './components/artists/Artist';

function Content() {
    const location = useLocation();
    const isArtistPage = location.pathname === '/artists';

    if (isArtistPage) {
        // Directly return the Artists component without wrapping it in a div with the bodySection class
        return (
            <Routes>
                <Route path="/artists" element={<Artists />} />
            </Routes>
        );
    } else {
        // Wrap other components in a div with the bodySection class
        return (
            <div className="bodySection">
                <Routes>
                    <Route exact path="/" element={<Body />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/events" element={<Events />} />
                    {/* The Artists route is already handled above, so it's excluded here */}
                </Routes>
            </div>
        );
    }
}

function App() {
    return (
        <Router>
            {/* Use the Content component to conditionally apply bodySection */}
            <Content />
        </Router>
    );
}

export default App;
