import React from "react";
import { Link } from "react-router-dom";

import "./AgentSingle.css";

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
    </div>
  );
};

export default AgentSingle;
