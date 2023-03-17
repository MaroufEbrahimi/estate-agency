import React from "react";

import "./Backdrop.css";

const Backdrop = (props) => {
  return props.showBackdrop ? (
    <div className="backdrop" onClick={props.removeModal}></div>
  ) : null;
};

export default Backdrop;
