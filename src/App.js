import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Pictures from './Pictures';
import Dates from './Dates';
import Videos from './Videos';
import Footer from './Footer';

function App() {

  return (
    <Router>
      <div>
        <center>
          <h2 className="gushi">Welcome to Gushi's World</h2>
        </center>
        <marquee>14 <sup>th</sup> June, 2023 ------------------------------- ∞</marquee>
        <br />
        <br />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pictures" element={<Pictures />} />
          <Route path="/dates" element={<Dates />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
