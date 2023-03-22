import React from "react";

import "./Testimonials.css";

const Testimonials = (props) => {
  return (
    <div className="testimonials_details">
      <div className="testimonials_details_box">
        <img src={props.img} />
      </div>
      <div className="testimonials_details_box">
        <span class="ion-ios-quote"></span>
        <p>{props.text}</p>
        <div>
          <img src={props.miniImg} className="testimonials_name_img" />
          <p>{props.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
