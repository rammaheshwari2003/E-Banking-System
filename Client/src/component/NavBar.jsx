import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom for navigation

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State to manage menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  // Toggle the state when hamburger is clicked
  };

  const closeMenu = () => {
    setIsMenuOpen(false);  // Close the menu when a link is clicked
  };

  return (
    <nav id="NavBar">
      <div className="logo">Our Bank</div>

      {/* Links container */}
      <div className={`links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="home" onClick={closeMenu}>Home</Link>
        <Link to="login" onClick={closeMenu}>Login</Link>
        <Link to="registration" onClick={closeMenu}>Registration</Link>
      </div>

      {/* Hamburger menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
