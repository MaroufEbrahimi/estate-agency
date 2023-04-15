import React from "react"

import "./BackToTop.css"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"

const BackToTop = (props) => {
  return props.backToTop ? (
    <div className="back_to_top">
      <button onClick={props.backToTopFun}>
        <ExpandLessIcon className="backToTopIcon" />
      </button>
    </div>
  ) : null
}

export default BackToTop
