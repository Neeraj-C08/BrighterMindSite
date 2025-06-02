import React from 'react';
import './NavBar.css'; // Import the CSS file

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">MyBusiness</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#details">Program Details</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#events">Events</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
