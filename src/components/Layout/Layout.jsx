import React from "react";
import "./Layout.css";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook ,faInstagram,faGithub} from "@fortawesome/free-brands-svg-icons";
import {faGem} from '@fortawesome/free-solid-svg-icons'
 

const Layout = () => {
  
  return (
    <div className="layout">
      <div className="nav-bar">
        <Link to={'/'}>
         <img className="img-nav-bar"
          src="https://static.vecteezy.com/system/resources/previews/001/192/065/original/circle-logo-turbine-png.png" 
         
        
         /> </Link>
        <div className="left-nav">
          <Link to="/" className="link-nav">
            HomePage
          </Link>
          <Link to="/about" className="link-nav">
            About Us
          </Link>
          <Link to="/EventPage" className="link-nav">
          Wdding Me
          </Link>
          <Link to="/contact" className="link-nav">
          Contact Us
          </Link>
        </div>
      </div>
      <hr />
      <Outlet />
      <hr />
      <footer className="footer">
        <div className="social-links">
          <a 
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon  className="icon" icon={faInstagram} />
          </a>
          <a 
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faGithub} />
          </a>
        </div>
        <ul className="footer-links">
          <li>
            <a href="/">Homepage</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
