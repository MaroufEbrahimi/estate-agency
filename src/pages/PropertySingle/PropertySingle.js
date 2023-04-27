import React, { useState } from "react"
import { Link } from "react-router-dom"

import "./PropertySingle.css"

import Slider from "./Slider/Slider"

const PropertySingle = (props) => {
  return (
    <div className="property_single">
      <div className="property_single_title every_pages_title">
        <div>
          <h1>304 Blaster Up</h1>
          <p>Chicago, IL 606543</p>
        </div>
        <p>
          <Link
            to="/estate-agency"
            onClick={() => props.setActive("/estate-agency")}
          >
            <span>Home </span>
          </Link>
          /
          <Link
            to="/estate-agency"
            onClick={() => props.setActive("/estate-agency")}
          >
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

      <div className="property_single_section2">
        <div className="property_single_section2_boxes">
          <div className="property_single_section2_box">
            <div className="card_title_money">
              <div className="title_money_icon">
                <span>$</span>
              </div>
              <div className="title_money_quantity">
                <h5>15000</h5>
              </div>
            </div>
            <div className="property_summery">
              <h3>Quick Summary</h3>
              <ul>
                <li>
                  <strong>Property ID:</strong>
                  <span>1134</span>
                </li>
                <li>
                  <strong>Location:</strong>
                  <span>Chicago, IL 606543</span>
                </li>
                <li>
                  <strong>Property Type:</strong>
                  <span>House</span>
                </li>
                <li>
                  <strong>Status:</strong>
                  <span>Sale</span>
                </li>
                <li>
                  <strong>Area:</strong>
                  <span>
                    340m
                    <sup>2</sup>
                  </span>
                </li>
                <li>
                  <strong>Beds:</strong>
                  <span>4</span>
                </li>
                <li>
                  <strong>Baths:</strong>
                  <span>2</span>
                </li>
                <li>
                  <strong>Garage:</strong>
                  <span>1</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="property_single_section2_box">
            <div className="property_description">
              <h3>Property Description</h3>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Donec velit neque, auctor sit amet
                aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula
                sed magna dictum porta. Curabitur aliquet quam id dui posuere
                blandit. Mauris blandit aliquet elit, eget tincidunt nibh
                pulvinar quam id dui posuere blandit.
              </p>
              <p>
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Donec rutrum congue leo eget malesuada. Quisque velit nisi,
                pretium ut lacinia in, elementum id enim. Donec sollicitudin
                molestie malesuada.
              </p>
            </div>

            <div className="propery_amenity">
              <h3>Amenities</h3>
              <ul>
                <li>Balcony</li>
                <li>Outdoor Kitchen</li>
                <li>Cable Tv</li>
                <li>Deck</li>
                <li>Tennis Courts</li>
                <li>Internet</li>
                <li>Parking</li>
                <li>Sun Room</li>
                <li>Concrete Flooring</li>
              </ul>
            </div>
          </div>
        </div>
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

              <div className="social_links">
                <a href="https://twitter.com/01Marouf" target="_blank">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/marouffmfm/" target="_blank">
                  <i className="fa fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/marouf-ebrahimi-7b6312237"
                  target="_blank"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://github.com/MaroufEbrahimi" target="_blank">
                  <i className="fa fa-github"></i>
                </a>
                <a
                  href="https://www.pinterest.com/maroufebrahimi/"
                  target="_blank"
                >
                  <i className="fa fa-pinterest"></i>
                </a>
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
  )
}

export default PropertySingle
