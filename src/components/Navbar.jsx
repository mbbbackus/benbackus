import React from "react";
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
        <div className="navbar">
            <a className="nav-link" href={`${process.env.PUBLIC_URL}/`}>Home</a>
            <a className="nav-link" href={`${process.env.PUBLIC_URL}/#/about`}>About</a>
            <a className="nav-link" href={`${process.env.PUBLIC_URL}/#/coding`}>Coding</a>
            <a className="nav-link" href={`${process.env.PUBLIC_URL}/#/art`}>Art</a>
            <a className="nav-link" href={`${process.env.PUBLIC_URL}/#/writing`}>Writing</a>
        </div>
    </div>
  );
}

export default Navbar;