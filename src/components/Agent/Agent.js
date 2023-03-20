import React from "react";
import { Link } from "react-router-dom";

import "./Agent.css";

const Agent = (props) => {
  return (
    <div className="agent">
      <div className="agent_img">
        <img src={props.img} />
      </div>
      <div className="agent_layer">
        <div className="agent_layer_details">
          <Link to="/" className="layer_header_name">
            {props.name}
          </Link>
          <div className="agent_layer_text">
            <p>{props.text}</p>
          </div>
          <div className="agent_layer_network">
            <p>
              <span>Phone:</span> {props.phone}
            </p>
            <p>
              <span>Email:</span> {props.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agent;
