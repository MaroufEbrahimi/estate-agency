import React from "react"
import { Link } from "react-router-dom"

import "./Property.css"

import LatestProperty from "../../components/LatestProperty/LatestProperty"

const Property = ({
  property_4,
  property_5,
  property_6,
  property_7,
  property_8,
  property_9,
  setActive,
}) => {
  return (
    <div className="property">
      <div className="property_title every_pages_title">
        <div>
          <h1>Our Amazing Properties</h1>
          <p>Grid Properties</p>
        </div>
        <p>
          <Link to="/estate-agency" onClick={() => setActive("/estate-agency")}>
            <span>Home </span>
          </Link>
          / Properties Grid
        </p>
      </div>

      <div className="property_options">
        <select id="type">
          <option selected>All</option>
          <option value="1">New to Old</option>
          <option value="2">For Rent</option>
          <option value="3">For Sale</option>
        </select>
      </div>

      <div className="latest_property_boxes">
        <div className="latest_property_box">
          <LatestProperty
            img={property_4}
            title="206 Mount Olive Road Two"
            rent="RENT | $ 12.000"
            view="Click here to view"
          />
        </div>
        <div className="latest_property_box">
          <LatestProperty
            img={property_5}
            title="157 West Central Park"
            rent="RENT | $ 12.000"
            view="Click here to view"
          />
        </div>
        <div className="latest_property_box">
          <LatestProperty
            img={property_6}
            title="245 Azabu Nishi Park Let"
            rent="RENT | $ 12.000"
            view="Click here to view"
          />
        </div>
        <div className="latest_property_box">
          <LatestProperty
            img={property_7}
            title="245 Azabu Nishi Park Let"
            rent="RENT | $ 12.000"
            view="Click here to view"
          />
        </div>
        <div className="latest_property_box">
          <LatestProperty
            img={property_8}
            title="245 Azabu Nishi Park Let"
            rent="RENT | $ 12.000"
            view="Click here to view"
          />
        </div>
        <div className="latest_property_box">
          <LatestProperty
            img={property_9}
            title="245 Azabu Nishi Park Let"
            rent="RENT | $ 12.000"
            view="Click here to view"
          />
        </div>
      </div>

      <div class="property_pagination">
        <a href="/">&laquo;</a>
        <a href="/">1</a>
        <a href="/" className="active_pagination">
          2
        </a>
        <a href="/">3</a>
        <a href="/">&raquo;</a>
      </div>
    </div>
  )
}

export default Property
