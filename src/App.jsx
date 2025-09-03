import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Artists from './components/artists/Artist.jsx';
import Events from './components/events/Events.jsx';
import Gallery from './components/gallery/Gallery.jsx';
import Body from './components/home/Body.jsx';
import './styles/typography.css';

// Layout wrapper component for pages that need bodySection class
function Layout({ children }) {
  return <div className="bodySection">{children}</div>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Body />
            </Layout>
          }
        />
        <Route
          path="/gallery"
          element={
            <Layout>
              <Gallery />
            </Layout>
          }
        />
        <Route
          path="/events"
          element={
            <Layout>
              <Events />
            </Layout>
          }
        />
        {/* Artists page without bodySection wrapper */}
        <Route path="/artists" element={<Artists />} />
      </Routes>
    </Router>
  );
}

export default App;
