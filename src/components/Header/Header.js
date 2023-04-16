import React, { useState } from "react"
import { Link } from "react-router-dom"

import "./Header.css"
import SearchIcon from "@mui/icons-material/Search"

const Header = (props) => {
  const [active, setActive] = useState(window.location.pathname)

  return (
    <div className={`header ${props.show && "header__height"}`}>
      <div className="header_logo">
        <Link to="/estate-agency">
          Estate<span>Agency</span>
        </Link>
      </div>

      <ul className="nav_links">
        <li>
          <Link
            to="/estate-agency"
            className={active == "/estate-agency" ? "active" : ""}
            onClick={() => setActive("/estate-agency")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={active == "/about" ? "active" : ""}
            onClick={() => setActive("/about")}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/property"
            className={active == "/property" ? "active" : ""}
            onClick={() => setActive("/property")}
          >
            Property
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className={active == "/blog" ? "active" : ""}
            onClick={() => setActive("/blog")}
          >
            Blog
          </Link>
        </li>
        <li className="nav_menu">
          <Link>
            Pages <i className="fa fa-angle-down"></i>
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
          <Link
            to="/contact"
            className={active == "/contact" ? "active" : ""}
            onClick={() => setActive("/contact")}
          >
            Contact
          </Link>
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
