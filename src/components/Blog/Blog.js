import React from "react";
import { Link } from "react-router-dom";

import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog_title">
        <div>
          <h1>Our Amazing Posts</h1>
          <p>Grid News</p>
        </div>
        <p>
          <Link to="/">
            <span>Home </span>
          </Link>
          / News Grid
        </p>
      </div>
    </div>
  );
};

export default Blog;
