import React, { useState } from "react"
import { Link } from "react-router-dom"

import "./Header.css"
import SearchIcon from "@mui/icons-material/Search"

const Header = (props) => {
  const [active, setActive] = useState(window.location.pathname)

  return (
    <div className={`header ${props.show && "header__height"}`}>
      <div className="header_logo">
        <Link to="/estate-agency" onClick={() => setActive("/estate-agency")}>
          Estate<span>Agency</span>
        </Link>
      </div>

      <ul className="nav_links">
        <li onClick={props.backToTopFun}>
          <Link
            to="/estate-agency"
            className={active == "/estate-agency" ? "active" : ""}
            onClick={() => setActive("/estate-agency")}
          >
            Home
          </Link>
        </li>
        <li onClick={props.backToTopFun}>
          <Link
            to="/about"
            className={active == "/about" ? "active" : ""}
            onClick={() => setActive("/about")}
          >
            About
          </Link>
        </li>
        <li onClick={props.backToTopFun}>
          <Link
            to="/property"
            className={active == "/property" ? "active" : ""}
            onClick={() => setActive("/property")}
          >
            Property
          </Link>
        </li>
        <li onClick={props.backToTopFun}>
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
              <li onClick={props.backToTopFun}>
                <Link
                  to="/property-single"
                  className={active == "/property-single" ? "active" : ""}
                  onClick={() => setActive("/property-single")}
                >
                  Property Single
                </Link>
              </li>
              <li onClick={props.backToTopFun}>
                <Link
                  to="/blog-details"
                  className={active == "/blog-details" ? "active" : ""}
                  onClick={() => setActive("/blog-details")}
                >
                  Blog Single
                </Link>
              </li>
              <li onClick={props.backToTopFun}>
                <Link
                  to="/agent-grid"
                  className={active == "/agent-grid" ? "active" : ""}
                  onClick={() => setActive("/agent-grid")}
                >
                  Agents Grid
                </Link>
              </li>
              <li onClick={props.backToTopFun}>
                <Link
                  to="/agent-single"
                  className={active == "/agent-single" ? "active" : ""}
                  onClick={() => setActive("/agent-single")}
                >
                  Agent Single
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li onClick={props.backToTopFun}>
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
