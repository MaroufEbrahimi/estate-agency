import React from "react"
import { Link } from "react-router-dom"

import "./Header.css"
import SearchIcon from "@mui/icons-material/Search"

const Header = (props) => {
  return (
    <div className={`header ${props.show && "header__height"}`}>
      <div className="header_logo">
        <Link
          to="/estate-agency"
          onClick={() => props.setActive("/estate-agency")}
        >
          Estate<span>Agency</span>
        </Link>
      </div>

      <ul className="nav_links">
        <li onClick={props.backToTopFun}>
          <Link
            to="/estate-agency"
            className={props.active == "/estate-agency" ? "active" : ""}
            onClick={() => props.setActive("/estate-agency")}
          >
            Home
          </Link>
        </li>
        <li onClick={props.backToTopFun}>
          <Link
            to="/about"
            className={props.active == "/about" ? "active" : ""}
            onClick={() => props.setActive("/about")}
          >
            About
          </Link>
        </li>
        <li onClick={props.backToTopFun}>
          <Link
            to="/property"
            className={props.active == "/property" ? "active" : ""}
            onClick={() => props.setActive("/property")}
          >
            Property
          </Link>
        </li>
        <li onClick={props.backToTopFun}>
          <Link
            to="/blog"
            className={props.active == "/blog" ? "active" : ""}
            onClick={() => props.setActive("/blog")}
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
                  className={props.active == "/property-single" ? "active" : ""}
                  onClick={() => props.setActive("/property-single")}
                >
                  Property Single
                </Link>
              </li>
              <li onClick={props.backToTopFun}>
                <Link
                  to="/blog-details"
                  className={props.active == "/blog-details" ? "active" : ""}
                  onClick={() => props.setActive("/blog-details")}
                >
                  Blog Single
                </Link>
              </li>
              <li onClick={props.backToTopFun}>
                <Link
                  to="/agent-grid"
                  className={props.active == "/agent-grid" ? "active" : ""}
                  onClick={() => props.setActive("/agent-grid")}
                >
                  Agents Grid
                </Link>
              </li>
              <li onClick={props.backToTopFun}>
                <Link
                  to="/agent-single"
                  className={props.active == "/agent-single" ? "active" : ""}
                  onClick={() => props.setActive("/agent-single")}
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
            className={props.active == "/contact" ? "active" : ""}
            onClick={() => props.setActive("/contact")}
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
