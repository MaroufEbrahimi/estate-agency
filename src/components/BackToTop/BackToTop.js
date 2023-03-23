import React from "react";

import "./BackToTop.css";

const BackToTop = (props) => {
  return props.backToTop ? (
    <div className={`back_to_top ${props.backToTop && "backtoto"}`}>
      <button onClick={props.backToTopFun}>1</button>
    </div>
  ) : null;
};

export default BackToTop;