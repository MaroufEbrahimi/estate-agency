import React from "react";
import { Link } from "react-router-dom";

import "./AgentsGrid.css";

const AgentsGrid = () => {
  return (
    <div className="agent_grid">
      <div className="agent_grid_title">
        <div>
          <h1>Our Amazing Agents</h1>
          <p>Grid Properties</p>
        </div>
        <p>
          <Link to="/">
            <span>Home </span>
          </Link>
          / Agents Grid
        </p>
      </div>
    </div>
  );
};

export default AgentsGrid;
