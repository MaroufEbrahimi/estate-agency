import React, { useState, useEffect } from "react";

import "./Header.css";

const Header = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 90) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`header ${show && "header__height"}`}>
      <div className="header_logo">
        <a href="/">
          Estate<span>Agency</span>
        </a>
      </div>

      <div className="nav_links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/property">Property</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/pages">Pages</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="header_search_icon">
        <i>a</i>
      </div>
    </div>
  );
};

export default Header;
