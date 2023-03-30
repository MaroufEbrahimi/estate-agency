import React from "react";
import { Link } from "react-router-dom";

import "./PropertySingle.css";

// images
import agent4 from "../../assets/agents/agent-4.jpg";

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

      <div className="property_single_section5">
        <h1>Contact Agent</h1>
        <div className="property_single_section5_boxes">
          <div className="property_single_section5_box property_single_section5_box1">
            <div className="section5_box">
              <img src={agent4} />
            </div>

            <div className="section5_box">
              <h3>Anabella Geller</h3>
              <p>
                Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet
                quam vehicula elementum sed sit amet dui. Quisque velit nisi,
                pretium ut lacinia in, elementum id enim.
              </p>
            </div>
          </div>

          <div className="property_single_section5_box property_single_section5_box2">
            <div>
              <input type="text" placeholder="Name *" />
            </div>
            <div>
              <input type="text" placeholder="Email *" />
            </div>
            <div>
              <textarea cols="30" rows="8" placeholder="Comment *"></textarea>
            </div>
            <div>
              <button className="btn">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySingle;
