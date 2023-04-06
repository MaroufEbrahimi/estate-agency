import React from "react";

import "./Testimonials.css";

const Testimonials = (props) => {
  return (
    <div className="testimonials_details">
      <div className="testimonials_details_box">
        <img src={props.testimonialsObj[1].img} />
      </div>
      <div className="testimonials_details_box">
        <span className="ion-ios-quote">1</span>
        <div className="testimonials_text">
          <p>{props.testimonialsObj[1].text}</p>
        </div>
        <div className="testimonials_profile">
          <img
            src={props.testimonialsObj[1].miniImg}
            className="testimonials_name_img"
          />
          <p>{props.testimonialsObj[1].name}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
