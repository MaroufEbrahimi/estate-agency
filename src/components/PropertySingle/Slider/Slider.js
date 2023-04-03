import React from "react";

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
              background: currenSlide === i ? `#4c8d60` : `transparent`,
            }}
            onClick={() => nextSlide(i)}
          ></div>
        ))}
    </div>
  );
};

const Slider = ({ images = [], ...props }) => {
  const nextSlide = (slideIndex = props.currentSlide + 1) => {
    const currentSlideIndex = slideIndex >= images.length ? 0 : slideIndex;
    props.setCurrentSlide(currentSlideIndex);
  };

  return (
    <div className="image_slider" {...props}>
      {images.map((item, index) => (
        <div
          className="slide"
          key={index}
          style={{
            backgroundImage: `url(${item})`,
            marginLeft: index === 0 ? `-${props.currentSlide * 126}%` : null,
          }}
        ></div>
      ))}
      <Indicator
        currenSlide={props.currentSlide}
        amountSlides={images.length}
        nextSlide={nextSlide}
      />
    </div>
  );
};

export default Slider;
