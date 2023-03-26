import React from "react";
import { Link } from "react-router-dom";

import "./BlogSingle.css";

const Blog = (props) => {
  return (
    <div className="blog_single">
      <img src={props.img} />

      <div className="blog_single_detail">
        <div className="blog_single_details">
          <Link to="/">{props.link}</Link>
          <h3>{props.text}</h3>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
