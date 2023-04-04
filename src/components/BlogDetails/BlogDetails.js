import React from "react";
import { Link } from "react-router-dom";

import "./BlogDetails.css";

const BlogDetails = ({ propertySlide3 }) => {
  return (
    <div className="blog_details">
      <div className="blog_details_title">
        <div>
          <h1>Book Cover Deisgn</h1>
          <p>News Single.</p>
        </div>
        <p>
          <Link to="/">
            <span>Home </span>
          </Link>
          / Book Cover Deisgn
        </p>
      </div>

      <div className="blog_details_section1">
        <img src={propertySlide3} />
        <p>
          <strong>Author:</strong> Marouf Famous <strong>Category: </strong>
          Travel
          <strong> Date: </strong> 3 Apr. 2023
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
