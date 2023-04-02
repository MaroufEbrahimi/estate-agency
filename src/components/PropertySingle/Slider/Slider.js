import React, { useState } from "react";

import "./Slider.css";

const Slider = ({ images = [], ...props }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="image_slider" {...props}>
      {images.map((item, index) => (
        <div
          className="slide"
          key={index}
          style={{
            backgroundImage: `url(${item})`,
            marginLeft: index === 0 ? `-${currentSlide * 100}%` : null,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Slider;
