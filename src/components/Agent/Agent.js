import React from "react"
import { Link } from "react-router-dom"

import "./Agent.css"

const Agent = (props) => {
  return (
    <div className="agent">
      <div className="agent_img">
        <img src={props.img} />
      </div>
      <div className="agent_layer">
        <div className="agent_layer_details">
          <Link to="/" className="layer_header_name">
            {props.name}
          </Link>
          <div className="agent_layer_text">
            <p>{props.text}</p>
          </div>
          <div className="agent_layer_network">
            <p>
              <span>Phone:</span> {props.phone}
            </p>
            <p>
              <span>Email:</span> {props.email}
            </p>
          </div>
          <div className="agent_layer_socialmedia">
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
            <a href="https://www.pinterest.com/maroufebrahimi/" target="_blank">
              <i className="fa fa-github"></i>
            </a>
            <a href="/" target="_blank">
              <i className="fa fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agent
