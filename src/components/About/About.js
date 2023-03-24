import React from "react";

import Agent from "../Agent/Agent";

import "./About.css";

import agent7 from "../../assets/agents/agent-7.jpg";
import agent6 from "../../assets/agents/agent-6.jpg";
import agent5 from "../../assets/agents/agent-5.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="best_agents_boxes">
        <div className="best_agents_box">
          <Agent
            img={agent7}
            name="Ahmad Ali Ahmadi"
            text="Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two."
            phone="+93 123 1456 11"
            email="info@exp.com"
          />
        </div>
        <div className="best_agents_box">
          <Agent
            img={agent6}
            name="Moahmmad Nabi Moahmmadi"
            text="Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two."
            phone="+93 123 1456 12"
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
      </div>
    </div>
  );
};

export default About;
