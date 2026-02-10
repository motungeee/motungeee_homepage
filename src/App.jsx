import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutCenter from './pages/AboutCenter';
import Counselor from './pages/Counselor';
import Programs from './pages/Programs';
import Reservation from './pages/Reservation';
import Location from './pages/Location';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutCenter />} />
          <Route path="counselor" element={<Counselor />} />
          <Route path="programs" element={<Programs />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="location" element={<Location />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
