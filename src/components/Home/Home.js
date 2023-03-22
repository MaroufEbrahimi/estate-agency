import React from "react";
import { Link } from "react-router-dom";

import LatestProperty from "../LatestProperty/LatestProperty";
import Agent from "../Agent/Agent";
import Blog from "../Blog/Blog";
import Testimonials from "../Testimonials/Testimonials";

import "./Home.css";

// Latest property images
import property_1 from "../../assets/latest-property/property-1.jpg";
import property_2 from "../../assets/latest-property/property-2.jpg";
import property_3 from "../../assets/latest-property/property-3.jpg";

// Agents images
import agent1 from "../../assets/agents/agent-1.jpg";
import agent2 from "../../assets/agents/agent-2.jpg";
import agent3 from "../../assets/agents/agent-3.jpg";

// Blog images
import blog1 from "../../assets/blog/post-1.jpg";
import blog2 from "../../assets/blog/post-2.jpg";
import blog3 from "../../assets/blog/post-3.jpg";

// Testimonials
import testimonial2 from "../../assets/testimonials/testimonial-2.jpg";
import testimonialMini2 from "../../assets/testimonials/mini-testimonial-2.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="our_services">
        <h1>our services</h1>
        <div className="our_services_columns">
          <div className="our_services_col">
            <div className="our_services_title">
              <span className="fa fa-gamepad">2</span>
              <h2>Lifestyle</h2>
            </div>
            <p>
              Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum
              porta. Praesent sapien massa, convallis a pellentesque nec,
              egestas non nisi.
            </p>
            <a href="#">
              <span>
                Read more <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>

          <div className="our_services_col">
            <div className="our_services_title">
              <span className="fa fa-usd">2</span>
              <h2>Loans</h2>
            </div>
            <p>
              Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui
              posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh
              pulvinar a.
            </p>
            <a href="#">
              <span>
                Read more <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>

          <div className="our_services_col">
            <div className="our_services_title">
              <span className="fa fa-home">2</span>
              <h2>Sell</h2>
            </div>
            <p>
              Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum
              porta. Praesent sapien massa, convallis a pellentesque nec,
              egestas non nisi.
            </p>
            <a href="#">
              <span>
                Read more <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Latest Property */}
      <div className="latest_property">
        <div className="latest_property_title">
          <h1>Latest Properties</h1>
          <Link to="/property">
            All Property <span className="fa fa-angle-right"></span>
          </Link>
        </div>
        <div className="latest_property_boxes">
          <div className="latest_property_box">
            <LatestProperty
              img={property_1}
              title="206 Mount Olive Road Two"
              rent="RENT | $ 12.000"
              view="Click here to view"
            />
          </div>
          <div className="latest_property_box">
            <LatestProperty
              img={property_2}
              title="157 West Central Park"
              rent="RENT | $ 12.000"
              view="Click here to view"
            />
          </div>
          <div className="latest_property_box">
            <LatestProperty
              img={property_3}
              title="245 Azabu Nishi Park Let"
              rent="RENT | $ 12.000"
              view="Click here to view"
            />
          </div>
        </div>
      </div>

      {/* Best Agents */}
      <div className="best_agents">
        <div className="best_agents_title">
          <h1>Best Agents</h1>
          <Link to="/agentGrid">
            All Agents <span className="fa fa-angle-right"></span>
          </Link>
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
        </div>
      </div>

      {/* Blog */}
      <div className="latest_news">
        <div className="blog_title">
          <h1>Latest News</h1>
          <Link to="/blog">
            All News <span className="fa fa-angle-right"></span>
          </Link>
        </div>
        <div className="blog_boxes">
          <div className="blog_box">
            <Blog
              img={blog1}
              link="House"
              text="House is comming new"
              date="21 Mar. 2023"
            />
          </div>
          <div className="blog_box">
            <Blog
              img={blog2}
              link="Travel"
              text="Travel is comming new"
              date="22 Mar. 2023"
            />
          </div>
          <div className="blog_box">
            <Blog
              img={blog3}
              link="Park"
              text="Park is comming new"
              date="23 Mar. 2023"
            />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials">
        <div className="testimonials_title">
          <h1>Testimonials</h1>
          <div className="testimonials_angles">
            <span className="fa fa-angle-left"></span>
            <span className="fa fa-angle-right"></span>
          </div>
        </div>
        <div className="testimonials_boxes">
          <div className="testimonials_box">
            <Testimonials
              img={testimonial2}
              text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique minus, magnam laboriosam praesentium cum est autem ducimus ullam dolore, corrupti eius!"
              miniImg={testimonialMini2}
              name="Pablo & Emma"
            />
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default Home;
