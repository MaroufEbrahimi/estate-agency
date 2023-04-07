import React from "react";
import { Link } from "react-router-dom";

import Agent from "../../components/Agent/Agent";

import "./AgentsGrid.css";

const AgentsGrid = ({ agent1, agent2, agent3, agent4, agent5, agent6 }) => {
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

      <div className="best_agents_boxes">
        <div className="best_agents_box">
          <Agent
            img={agent1}
            name="Ahmad Ali Ahmadi"
            text="Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two."
            phone="+93 123 1456 11"
            email="info@exp.com"
          />
        </div>
        <div className="best_agents_box">
          <Agent
            img={agent2}
            name="Moahmmad Nabi Moahmmadi"
            text="Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two."
            phone="+93 123 1456 12"
            email="info@exp.com"
          />
        </div>
        <div className="best_agents_box">
          <Agent
            img={agent3}
            name="Marouf Famous Ebrahimi"
            text="Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two."
            phone="+93 123 1456 13"
            email="info@exp.com"
          />
        </div>
        <div className="best_agents_box">
          <Agent
            img={agent4}
            name="Marouf Famous Ebrahimi"
            text="Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two."
            phone="+93 123 1456 13"
            email="info@exp.com"
          />
        </div>
        <div className="best_agents_box">
          <Agent
            img={agent5}
            name="Marouf Famous Ebrahimi"
            text="Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two."
            phone="+93 123 1456 13"
            email="info@exp.com"
          />
        </div>
        <div className="best_agents_box">
          <Agent
            img={agent6}
            name="Marouf Famous Ebrahimi"
            text="Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two."
            phone="+93 123 1456 13"
            email="info@exp.com"
          />
        </div>
      </div>
    </div>
  );
};

export default AgentsGrid;
