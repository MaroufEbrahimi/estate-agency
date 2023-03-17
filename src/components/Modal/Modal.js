import React from "react";

import "./Modal.css";

import Wrapper from "../../hoc/Wrapper";
import Backdrop from "./Backdrop/Backdrop";

const Modal = (props) => {
  return (
    <Wrapper>
      <Backdrop
        showBackdrop={props.showBackdrop}
        removeModal={props.removeModal}
      />

      <div
        className="modal"
        style={{
          transform: props.showBackdrop ? "translateX(0)" : "translateX(150vh)",
          opacity: props.showBackdrop ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Wrapper>
  );
};

export default Modal;
