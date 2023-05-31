import React from "react";
import "./Layout.css";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <div className="nav-bar">
        <img
          src="https://static.vecteezy.com/system/resources/previews/001/192/065/original/circle-logo-turbine-png.png"
          className="img-nav-bar"
        />
        <div className="left-nav">
          <Link to="/" className="link-nav">
            Homepage{" "}
          </Link>
          <Link to="/about" className="link-nav">
            About Us{" "}
          </Link>
          <Link to="/" className="link-nav">
            homepage{" "}
          </Link>
          <Link to="/" className="link-nav">
            homepage{" "}
          </Link>
        </div>
      </div>
      <hr />
      <Outlet></Outlet>
      <hr />
      <footer className="footer">
        <div className="social-links">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
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
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
