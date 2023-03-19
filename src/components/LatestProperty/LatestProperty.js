import React from "react";
import { Link } from "react-router-dom";

import "./LatestProperty.css";

const LatestProperty = (props) => {
  return (
    <div className="latest_property_details">
      <img src={props.img} />
      <div className="property_img_layer">
        <div className="property_img_details">
          <h3>{props.title}</h3>
          <p>{props.rent}</p>
          <Link to="/">{props.view}</Link>
          <i className="fa fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
};

export default LatestProperty;
