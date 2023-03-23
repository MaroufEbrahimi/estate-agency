import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";

const Header = (props) => {
  return (
    <div className={`header ${props.show && "header__height"}`}>
      <div className="header_logo">
        <Link to="/">
          Estate<span>Agency</span>
        </Link>
      </div>

      <div className="nav_links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/property">Property</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/pages">Pages</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="header_search">
        <button onClick={props.headerSearch}>
          <SearchIcon className="header_search_icon" />
        </button>
      </div>
    </div>
  );
};

export default Header;
