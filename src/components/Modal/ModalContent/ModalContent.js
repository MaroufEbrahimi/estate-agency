import React from "react";

import "./ModalContent.css";

const ModalContent = (props) => {
  return (
    <div className="search_property">
      <div className="search_property_title">
        <h1>
          <span>sear</span>ch property
        </h1>
        <button className="search_property_close" onClick={props.removeModal}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default ModalContent;
