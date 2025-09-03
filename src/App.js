import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/typography.css';
import Artists from './components/artists/Artist';
import Events from './components/events/Events';
import Gallery from './components/gallery/Gallery';
import Body from './components/home/Body';

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
