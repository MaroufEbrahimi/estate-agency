import React from "react";
import { Link } from "react-router-dom";

import Agent from "../Agent/Agent";

import "./AgentsGrid.css";

// images
import agent1 from "../../assets/agents/agent-1.jpg";
import agent2 from "../../assets/agents/agent-2.jpg";
import agent3 from "../../assets/agents/agent-3.jpg";
import agent4 from "../../assets/agents/agent-4.jpg";
import agent5 from "../../assets/agents/agent-5.jpg";
import agent6 from "../../assets/agents/agent-6.jpg";
import agent7 from "../../assets/agents/agent-7.jpg";

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
