import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import FooterDetails from "./FooterDetails/FooterDetails";

const Footer = () => {
  return (
    <div className="footer">
      <FooterDetails />

      <div className="footer_container">
        <div className="footer_links">
          <div className="footer_private_links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/property">Property</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer_social_links">
            <Link to="/">
              <i className="fa fa-twitter"></i>
            </Link>
            <Link to="/">
              <i className="fa fa-instagram"></i>
            </Link>
            <Link to="/">
              <i className="fa fa-linkedin"></i>
            </Link>
            <Link to="/">
              <i className="fa fa-github"></i>
            </Link>
            <Link to="/">
              <i className="fa fa-pinterest"></i>
            </Link>
          </div>
        </div>

        <div className="footer_copyright">
          <p>
            © copyright <span>EstateAgency</span> all rights reserved
          </p>
          <p>
            Designed by <Link to="">MaroufEbrahimi</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
