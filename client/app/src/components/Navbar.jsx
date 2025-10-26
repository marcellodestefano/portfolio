import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo_white.png";
import "./Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark opacity-75 fixed-top">
      <div className="container-fluid">

        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="Logo"
            className="logo-size d-inline-block align-text-top"
          />
        </Link>

        <button
          className="navbar-toggler my-btn-nav"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""} `}
          id="navbarNav">

          <ul className="navbar-nav ms-auto">
            <li className="nav-item myli">
              <Link to="/about" className="nav-link mylink myli" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li className="nav-item myli">
              <Link to="/about" className="nav-link mylink myli" onClick={() => setIsOpen(false)}>
                Studies
              </Link>
            </li>
            <li className="nav-item myli">
              <Link to="/projects" className="nav-link mylink" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
            <li className="nav-item myli">
              <Link to="/about" className="nav-link mylink myli" onClick={() => setIsOpen(false)}>
                Skills
              </Link>
            </li>
            <li className="nav-item myli">
              <Link to="/about" className="nav-link mylink myli" onClick={() => setIsOpen(false)}>
                Work
              </Link>
            </li>
            
            <li className="nav-item myli">
              <Link to="/contact" className="nav-link mylink" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  );
};
