import React from "react"
import { Link } from "react-router-dom"

import "./Header.css"
import SearchIcon from "@mui/icons-material/Search"

const Header = (props) => {
  return (
    <div className={`header ${props.show && "header__height"}`}>
      <div className="header_logo">
        <Link to="/">
          Estate<span>Agency</span>
        </Link>
      </div>

      <ul className="nav_links">
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
        <li className="nav_menu">
          <Link to="/pages">
            Pages <i className="fa fa-angle-down">1</i>
          </Link>
          <div className="nav_menu_list">
            <ul>
              <li>
                <Link to="/property-single">Property Single</Link>
              </li>
              <li>
                <Link to="/blog-details">Blog Single</Link>
              </li>
              <li>
                <Link to="/agent-grid">Agents Grid</Link>
              </li>
              <li>
                <Link to="/agent-single">Agent Single</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="header_search">
        <button onClick={props.headerSearch}>
          <SearchIcon className="header_search_icon" />
        </button>
      </div>
    </div>
  )
}

export default Header
