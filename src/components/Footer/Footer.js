import React from "react"
import { Link } from "react-router-dom"

import "./Footer.css"
import FooterDetails from "./FooterDetails/FooterDetails"

const Footer = () => {
  return (
    <div className="footer">
      <FooterDetails />

      <div className="footer_container">
        <div className="footer_links">
          <div className="footer_private_links">
            <Link to="/estate-agency">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/property">Property</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer_social_links social_links">
            <a href="https://twitter.com/01Marouf" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/marouffmfm/" target="_blank">
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/marouf-ebrahimi-7b6312237"
              target="_blank"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/MaroufEbrahimi" target="_blank">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://www.pinterest.com/maroufebrahimi/" target="_blank">
              <i className="fa fa-pinterest"></i>
            </a>
          </div>
        </div>

        <div className="footer_copyright">
          <p>
            © copyright <span>EstateAgency</span> all rights reserved
          </p>
          <p>
            <span>Development by </span>
            <a href="https://github.com/MaroufEbrahimi" target="_blank">
              MaroufEbrahimi
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
