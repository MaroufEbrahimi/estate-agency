import React, { useState } from "react";

import "./Slider.css";

const Indicator = ({ currenSlide, amountSlides, nextSlide }) => {
  return (
    <div className="indicatorWrapper">
      {Array(amountSlides)
        .fill(1)
        .map((_, i) => (
          <div
            className="dot"
            key={i}
            style={{
              background: currenSlide === i ? `#ee82ee` : `transparent`,
            }}
            onClick={() => nextSlide(i)}
          ></div>
        ))}
    </div>
  );
};

const Slider = ({ images = [], ...props }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = (slideIndex = currentSlide + 1) => {
    const currentSlideIndex = slideIndex >= images.length ? 0 : slideIndex;
    setCurrentSlide(currentSlideIndex);
  };

  return (
    <div className="image_slider" {...props}>
      {images.map((item, index) => (
        <div
          className="slide"
          key={index}
          style={{
            backgroundImage: `url(${item})`,
            marginLeft: index === 0 ? `-${currentSlide * 124}%` : null,
          }}
        ></div>
      ))}
      <Indicator
        currenSlide={currentSlide}
        amountSlides={images.length}
        nextSlide={nextSlide}
      />
    </div>
  );
};

export default Slider;
