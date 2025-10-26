import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css"



export  const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row align-items-center">
          
          
          <div className="col-md-6 text-center text-md-start mb-md-0 my-text">
            <p className="mb-2">
              <i>&copy; {new Date().getFullYear()} Marcello's Website</i>
            </p>
            <p className="mb-0">
              <i>+33 6 22 49 97 98 </i> 
            </p>
            <p className="mb-2"><i>marcello_destefano@hotmail.com</i></p>
            
            
          </div>

          
          <div className="col-md-6 text-center text-md-end">
            <Link to="/" className="text-light text-decoration-none me-3 " ><i className="my-links">Home</i></Link>
            <Link to="/about" className="text-light text-decoration-none me-3 " ><i className="my-links">About</i></Link>
            <Link to="/projects"className="text-light text-decoration-none me-3" ><i className="my-links">Projects</i></Link>
            <Link to="/contact"className="text-light text-decoration-none me-3" ><i className="my-links">Contact</i></Link>
          </div>

        </div>
      </div>
    </footer>
  );
};


