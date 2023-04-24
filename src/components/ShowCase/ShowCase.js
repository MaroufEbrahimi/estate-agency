import React from "react"
import "./ShowCase.css"

const ShowCase = ({ slide1 }) => {
  return (
    <div className="showcase">
      <img src={slide1} />
      <div className="showcase_details">
        <div className="showcase_details_address">
          <p>Doral, Florida</p>
          <p>01876</p>
        </div>

        <div className="showcase_details_title">
          <h1>
            <span>204</span> MOUNT OLIVE ROAD ONE
          </h1>
        </div>

        <div className="showcase_details_button">
          <p>RENT | $ 12.000</p>
        </div>
      </div>
    </div>
  )
}

export default ShowCase
