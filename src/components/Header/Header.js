import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
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
