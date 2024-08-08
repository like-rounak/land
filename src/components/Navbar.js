import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className="nav-links">
        <li>About us</li>
        <li>Profile</li>
        <li>Team</li>
        <li>Contact</li>
      </ul>
      <button className="sign-in">Sign in</button>
    </nav>
  );
};

export default Navbar;
