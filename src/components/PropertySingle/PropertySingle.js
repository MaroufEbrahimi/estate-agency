import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./PropertySingle.css";

import Slider from "./Slider/Slider";

const PropertySingle = (props) => {
  return (
    <div className="property_single">
      <div className="property_single_title">
        <div>
          <h1>304 Blaster Up</h1>
          <p>Chicago, IL 606543</p>
        </div>
        <p>
          <Link to="/">
            <span>Home </span>
          </Link>
          /
          <Link to="/">
            <span> Properties </span>
          </Link>
          / 304 Blaster Up
        </p>
      </div>

      <div className="property_single_section1">
        <Slider
          currentSlide={props.currentSlide}
          setCurrentSlide={props.setCurrentSlide}
          images={[
            props.propertySlide1,
            props.propertySlide2,
            props.propertySlide3,
          ]}
        />
      </div>

      <div className="property_single_section5">
        <h1>Contact Agent</h1>
        <div className="property_single_section5_boxes">
          <div className="property_single_section5_box property_single_section5_box1">
            <div className="section5_box">
              <img src={props.agent4} />
            </div>

            <div className="section5_box">
              <h3>Anabella Geller</h3>
              <p>
                Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet
                quam vehicula elementum sed sit amet dui. Quisque velit nisi,
                pretium ut lacinia in, elementum id enim.
              </p>

              <ul>
                <li>
                  <strong>Phone: </strong>
                  <span>(111) 23456789</span>
                </li>
                <li>
                  <strong>Mobile</strong>
                  <span>999 666 333 567</span>
                </li>
                <li>
                  <strong>Email</strong>
                  <span>famous@gmail.com</span>
                </li>
                <li>
                  <strong>Skype</strong>
                  <span>Famous FM</span>
                </li>
              </ul>

              <div className="property_social_links">
                <Link to="/">
                  <i className="fa fa-twitter">1</i>
                </Link>
                <Link to="/">
                  <i className="fa fa-instagram">1</i>
                </Link>
                <Link to="/">
                  <i className="fa fa-linkedin">1</i>
                </Link>
                <Link to="/">
                  <i className="fa fa-github">1</i>
                </Link>
                <Link to="/">
                  <i className="fa fa-pinterest">1</i>
                </Link>
              </div>
            </div>
          </div>

          <div className="property_single_section5_box property_single_section5_box2">
            <div>
              <input type="text" placeholder="Name *" />
            </div>
            <div>
              <input type="text" placeholder="Email *" />
            </div>
            <div>
              <textarea cols="30" rows="8" placeholder="Comment *"></textarea>
            </div>
            <div>
              <button className="btn">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySingle;
