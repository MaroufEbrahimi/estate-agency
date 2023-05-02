import React from "react";
import { Link } from "react-router-dom";

import "./FooterDetails.css";

const FooterDetails = () => {
  return (
    <div className="footer_details">
      <div className="footer_details_box">
        <h1>EstateAgency</h1>
        <p>
          Enim minim veniam quis nostrud exercitation ullamco laboris nisi ut
          aliquip exea commodo consequat duis sed aute irure.
        </p>
        <p>
          Phone . <span>+93 123 456 789</span>
        </p>
        <p>
          Email . <span>famous@gmail.com</span>
        </p>
      </div>

      <div className="footer_details_box">
        <h1>the campany</h1>
        <ul>
          <li>
            <Link to="#">
              <i className="fa fa-angle-right"></i> Site Map
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-angle-right"></i> Legal
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-angle-right"></i> Agent Admin
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-angle-right"></i> Careers
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-angle-right"></i> Affiliate
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-angle-right"></i> Privacy Policy
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer_details_box">
        <h1>international sites</h1>
        <ul>
          <li>
            <Link to="#">
              <i className="fa fa-angle-right"></i> Afghanistan
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-angle-right"></i> Venezuela
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-angle-right"></i> China
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-angle-right"></i> Hong Kong
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-angle-right"></i> Argentina
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-angle-right"></i> Singapore
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default FooterDetails;
