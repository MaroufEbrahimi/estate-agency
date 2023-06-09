import React from "react"
import { Link } from "react-router-dom"
import "./Home.css"

import LatestProperty from "../../components/LatestProperty/LatestProperty"
import Agent from "../../components/Agent/Agent"
import BlogSingle from "../../components/BlogSingle/BlogSingle"
import Testimonials from "../../components/Testimonials/Testimonials"
import ShowCase from "../../components/ShowCase/ShowCase"

const Home = ({
  slide1,
  property_1,
  property_2,
  property_3,
  agent1,
  agent2,
  agent3,
  blog1,
  blog2,
  blog3,
  testimonial1,
  testimonial2,
  testimonialMini1,
  testimonialMini2,
  setActive,
  backToTopFun,
}) => {
  const testimonialsObj = [
    {
      img: testimonial1,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique minus, magnam laboriosam praesentium cum est autem ducimus ullam dolore, corrupti eius!",
      miniImg: testimonialMini1,
      name: "Albert & Erika",
    },
    {
      img: testimonial2,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique minus, magnam laboriosam praesentium cum est autem ducimus ullam dolore, corrupti eius!",
      miniImg: testimonialMini2,
      name: "Pablo & Emma",
    },
  ]

  return (
    <div className="home">
      <ShowCase slide1={slide1} />

      <div className="our_services container">
        <h1>our services</h1>
        <div className="our_services_columns">
          <div className="our_services_col">
            <div className="our_services_title">
              <span className="fa fa-gamepad"></span>
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
              <span className="fa fa-usd"></span>
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
              <span className="fa fa-home"></span>
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
      <div className="latest_property container">
        <div className="latest_property_title home_page_titles">
          <h1>Latest Properties</h1>
          <p onClick={backToTopFun}>
            <Link to="/property" onClick={() => setActive("/property")}>
              All Property <i className="fa fa-angle-right"></i>
            </Link>
          </p>
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
      <div className="best_agents container">
        <div className="best_agents_title home_page_titles">
          <h1>Best Agents</h1>
          <p onClick={backToTopFun}>
            <Link to="/agent-grid" onClick={() => setActive("/agent-grid")}>
              All Agents <i className="fa fa-angle-right"></i>
            </Link>
          </p>
        </div>
        <div className="best_agents_boxes">
          <div className="best_agents_box">
            <Agent
              img={agent1}
              name="Marouf Famous Ebrahimi"
              text="Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two."
              phone="+93 123 1456 11"
              email="info@exp.com"
            />
          </div>
          <div className="best_agents_box">
            <Agent
              img={agent2}
              name="Marouf Famous Ebrahimi"
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
      <div className="latest_news container">
        <div className="blog_single_title home_page_titles">
          <h1>Latest News</h1>
          <p onClick={backToTopFun}>
            <Link to="/blog" onClick={() => setActive("/blog")}>
              All News <i className="fa fa-angle-right"></i>
            </Link>
          </p>
        </div>
        <div className="blog_single_boxes">
          <div className="blog_single_box">
            <BlogSingle
              img={blog1}
              link="House"
              text="House is comming new"
              date="21 Mar. 2023"
            />
          </div>
          <div className="blog_single_box">
            <BlogSingle
              img={blog2}
              link="Travel"
              text="Travel is comming new"
              date="22 Mar. 2023"
            />
          </div>
          <div className="blog_single_box">
            <BlogSingle
              img={blog3}
              link="Park"
              text="Park is comming new"
              date="23 Mar. 2023"
            />
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="testimonials container">
        <div className="testimonials_title home_page_titles">
          <h1>Testimonials</h1>
          <div className="testimonials_angles">
            <i className="fa fa-angle-left"></i>
            <i className="fa fa-angle-right"></i>
          </div>
        </div>
        <div className="testimonials_boxes">
          <div className="testimonials_box">
            <Testimonials testimonialsObj={testimonialsObj} />
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  )
}

export default Home
