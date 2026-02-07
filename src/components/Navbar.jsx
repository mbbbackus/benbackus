import React from "react";
import '../styles/Navbar.css';

function Navbar() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="navbar-container">
        <div className="navbar">
            <a className="nav-link" href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
            <a className="nav-link" href="#coding" onClick={(e) => scrollToSection(e, 'coding')}>Coding</a>
            <a className="nav-link" href="#art" onClick={(e) => scrollToSection(e, 'art')}>Art</a>
            <a className="nav-link" href="#writing" onClick={(e) => scrollToSection(e, 'writing')}>Writing</a>
            <a className="nav-link" href="#self-study" onClick={(e) => scrollToSection(e, 'self-study')}>Self-Study</a>
        </div>
    </div>
  );
}

export default Navbar;
