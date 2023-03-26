import React from "react";
import { Link } from "react-router-dom";

import "./Property.css";

import LatestProperty from "../LatestProperty/LatestProperty";

// images
import property_4 from "../../assets/latest-property/property-4.jpg";
import property_5 from "../../assets/latest-property/property-5.jpg";
import property_6 from "../../assets/latest-property/property-6.jpg";
import property_7 from "../../assets/latest-property/property-7.jpg";
import property_8 from "../../assets/latest-property/property-8.jpg";
import property_9 from "../../assets/latest-property/property-9.jpg";

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

      <div className="latest_property_boxes">
        <div className="latest_property_box">
          <LatestProperty
            img={property_4}
            title="206 Mount Olive Road Two"
            rent="RENT | $ 12.000"
            view="Click here to view"
          />
        </div>
        <div className="latest_property_box">
          <LatestProperty
            img={property_5}
            title="157 West Central Park"
            rent="RENT | $ 12.000"
            view="Click here to view"
          />
        </div>
        <div className="latest_property_box">
          <LatestProperty
            img={property_6}
            title="245 Azabu Nishi Park Let"
            rent="RENT | $ 12.000"
            view="Click here to view"
          />
        </div>
        <div className="latest_property_box">
          <LatestProperty
            img={property_7}
            title="245 Azabu Nishi Park Let"
            rent="RENT | $ 12.000"
            view="Click here to view"
          />
        </div>
        <div className="latest_property_box">
          <LatestProperty
            img={property_8}
            title="245 Azabu Nishi Park Let"
            rent="RENT | $ 12.000"
            view="Click here to view"
          />
        </div>
        <div className="latest_property_box">
          <LatestProperty
            img={property_9}
            title="245 Azabu Nishi Park Let"
            rent="RENT | $ 12.000"
            view="Click here to view"
          />
        </div>
      </div>
    </div>
  );
};

export default Property;
