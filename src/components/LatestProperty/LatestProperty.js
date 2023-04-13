import React from "react"
import { Link } from "react-router-dom"

import "./LatestProperty.css"

const LatestProperty = (props) => {
  return (
    <div className="latest_property_details">
      <img src={props.img} />
      <div className="property_img_layer">
        <div className="property_img_details">
          <h3>{props.title}</h3>
          <p>{props.rent}</p>
          <Link to="/">
            {props.view} <i className="fa fa-angle-right"></i>
          </Link>
        </div>

        <div className="property_img_card">
          <ul>
            <li>
              <h4>Area</h4>
              <span>
                340m
                <sup>2</sup>
              </span>
            </li>
            <li>
              <h4>Beds</h4>
              <span>2</span>
            </li>
            <li>
              <h4>Baths</h4>
              <span>4</span>
            </li>
            <li>
              <h4>Garages</h4>
              <span>1</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LatestProperty
