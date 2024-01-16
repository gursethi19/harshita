// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for Navbar styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/pictures" className="nav-link">Pictures</Link>
        </li>
        <li>
          <Link to="/dates" className="nav-link">Important Dates</Link>
        </li>
        <li>
          <Link to="/videos" className="nav-link">Videos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
