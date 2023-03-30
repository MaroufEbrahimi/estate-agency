import React from "react";
import { Link } from "react-router-dom";

import "./PropertySingle.css";

const PropertySingle = () => {
  return (
    <div className="property_single">
      <div className="property_single_title">
        <div>
          <h1>304 Blaster Up</h1>
          <p>Chicago, IL 606543</p>
        </div>
        <p>
          <Link to="/">
            <span>Home </span>
          </Link>
          /
          <Link to="/">
            <span> Properties </span>
          </Link>
          / 304 Blaster Up
        </p>
      </div>
    </div>
  );
};

export default PropertySingle;
