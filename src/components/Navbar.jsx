import React from "react";
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
        <div className="navbar">
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/#/about">About</a>
            <a className="nav-link" href="/#/coding">Coding</a>
            <a className="nav-link" href="/#/art">Art</a>
            <a className="nav-link" href="/#/writing">Writing</a>
        </div>
    </div>
  );
}

export default Navbar;