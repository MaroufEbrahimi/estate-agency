import React from "react";
import { Link } from "react-router-dom";

import Agent from "../Agent/Agent";

import "./About.css";

// images
import slideAbout1 from "../../assets/about/slide-about-1.jpg";
import about2 from "../../assets/about/about-2.jpg";
import agent7 from "../../assets/agents/agent-7.jpg";
import agent6 from "../../assets/agents/agent-6.jpg";
import agent5 from "../../assets/agents/agent-5.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="section_1">
        <div className="about_title">
          <h1>We Do Great Design For Creative Folks</h1>
          <p>
            <Link to="/">
              <span>Home </span>
            </Link>
            / About
          </p>
        </div>
        <div className="section1_image">
          <img src={slideAbout1} />
          <div className="section1_text">
            <h1>
              EstateAgency
              <br />
              Sinse 2017
            </h1>
            <p>Art & Creative</p>
          </div>
        </div>
      </div>

      <div className="section_2">
        <div className="section_2_box">
          <img src={about2} />
        </div>
        <div className="section_2_box">
          <h3>
            Sed <span>porttitor</span> lectus
            <br />
            nibh
          </h3>
          <p>
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus
            magna justo, lacinia eget consectetur sed, convallis at tellus.
            Praesent sapien massa, convallis a pellentesque nec, egestas non
            nisi. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
            aliquam vel, ullamcorper sit amet ligula.
          </p>
          <p>
            Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget
            consectetur sed, convallis at tellus. Mauris blandit aliquet elit,
            eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget
            consectetur sed, convallis at tellus.
          </p>
        </div>
      </div>

      <div className="meet_our_team">
        <div className="best_agents_title">
          <h1>Meet Our Team</h1>
        </div>
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
    </div>
  );
};

export default About;
