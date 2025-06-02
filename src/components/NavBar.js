import React from 'react';
import './NavBar.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">MyBusiness</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/programdetails">Program Details</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/events">Events</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
