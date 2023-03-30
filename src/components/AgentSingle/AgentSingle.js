import React from "react";
import { Link } from "react-router-dom";

import "./AgentSingle.css";
import LatestProperty from "../LatestProperty/LatestProperty";

// images
import agent7 from "../../assets/agents/agent-7.jpg";
import property_4 from "../../assets/latest-property/property-4.jpg";
import property_5 from "../../assets/latest-property/property-5.jpg";
import property_6 from "../../assets/latest-property/property-6.jpg";
import property_7 from "../../assets/latest-property/property-7.jpg";
import property_8 from "../../assets/latest-property/property-8.jpg";
import property_9 from "../../assets/latest-property/property-9.jpg";

const AgentSingle = () => {
  return (
    <div className="agent_single">
      <div className="agent_single_title">
        <div>
          <h1>Margaret Stone</h1>
          <p>Agent Immobiliari</p>
        </div>
        <p>
          <Link to="/">
            <span>Home </span>
          </Link>
          /
          <Link to="/">
            <span> Agents </span>
          </Link>
          / Margaret Stone
        </p>
      </div>

      <div className="agent_single_section1">
        <div className="agent_single_box">
          <img src={agent7} />
        </div>
        <div className="agent_single_box">
          <h3>
            Margaret Stone
            <br />
            Escala
          </h3>
          <p>
            Sed porttitor lectus nibh. Praesent sapien massa, convallis a
            pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget
            felis porttitor volutpat. Vivamus suscipit tortor eget felis
            porttitor volutpat.
          </p>
          <p>
            <span>Phone: </span>
            +93 123 123456
          </p>
          <p>
            <span>Mobile: </span>
            1234 4321 5678
          </p>
          <p>
            <span>Email: </span>
            famous@fm.com
          </p>
          <p>
            <span>Skype: </span>
            famousFM
          </p>
          <p>
            <span>Linkedin: </span>
            famous fm
          </p>

          <div className="agent_single_social_links">
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
      </div>

      <div className="agent_single_section2">
        <div className="agent_single_section2_title">
          <h1>My Properties (6)</h1>
        </div>

        <div className="agent_single_options">
          <select id="type">
            <option selected>All</option>
            <option value="1">New to Old</option>
            <option value="2">For Rent</option>
            <option value="3">For Sale</option>
          </select>
        </div>
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

export default AgentSingle;