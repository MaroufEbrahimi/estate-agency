import React from "react";
import {Link} from 'react-router-dom'

import "./Property.css";

const Property = () => {
  return (
    <div className="property">
      <div className="property_title">
        <div>
          <h1>Our Amazing Properties</h1>
          <p>Grid Properties</p>
        </div>
        <p>
          <Link to="/">
            <span>Home </span>
          </Link>
          / Properties Grid
        </p>
      </div>
    </div>
  );
};

export default Property;
