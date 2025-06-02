import React from 'react';

const NavBar = () => (
  <nav className="navbar">
    <img src="/logo.png" alt="Logo" />
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#details">Program Details</a></li>
      <li><a href="#calendar">Calendar</a></li>
      <li><a href="#about">About Us</a></li>
      <li><a href="#contact">Contact Us</a></li>
      <li><a href="#privacy">Privacy Policy</a></li>
    </ul>
  </nav>
);

export default NavBar;
