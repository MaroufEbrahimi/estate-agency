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

      <div className="blog_details_section2">
        <div className="blog_details_section2_1">
          <h3>
            Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur
            <strong> adipiscing</strong> elit. Vestibulum ac diam sit amet quam
            vehicula elementum sed sit amet dui. Praesent sapien massa,
            convallis a pellentesque nec, egestas non nisi.
          </h3>
        </div>
        <div className="blog_details_section2_2">
          <p>
            Proin eget tortor risus. Donec sollicitudin molestie malesuada. Cras
            ultricies ligula sed magna dictum porta. Pellentesque in ipsum id
            orci porta dapibus. Vestibulum ac diam sit amet quam vehicula
            elementum sed sit amet dui. Lorem ipsum dolor sit amet.
          </p>
          <p>
            Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit
            amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit
            amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Donec rutrum congue leo eget malesuada. Quisque velit nisi.
          </p>
        </div>
        <div className="blog_details_section2_3">
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </h4>
          <p>Albert Vargas Author</p>
        </div>
        <div className="blog_details_section2_4">
          <p>
            Donec rutrum congue leo eget malesuada. Curabitur aliquet quam id
            dui posuere blandit. Vivamus suscipit tortor eget felis porttitor
            volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id
            enim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
