import React from "react";
import { Link } from "react-router-dom";

import "./Blog.css";
import BlogSingle from "../BlogSingle/BlogSingle";

// Blog images
import blog2 from "../../assets/blog/post-2.jpg";
import blog3 from "../../assets/blog/post-3.jpg";
import blog4 from "../../assets/blog/post-4.jpg";
import blog5 from "../../assets/blog/post-5.jpg";
import blog6 from "../../assets/blog/post-6.jpg";
import blog7 from "../../assets/blog/post-7.jpg";

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

      <div className="blog_single_boxes">
        <div className="blog_single_box">
          <BlogSingle
            img={blog2}
            link="House"
            text="House is comming new"
            date="21 Mar. 2023"
          />
        </div>
        <div className="blog_single_box">
          <BlogSingle
            img={blog3}
            link="Travel"
            text="Travel is comming new"
            date="22 Mar. 2023"
          />
        </div>
        <div className="blog_single_box">
          <BlogSingle
            img={blog4}
            link="Park"
            text="Park is comming new"
            date="23 Mar. 2023"
          />
        </div>
        <div className="blog_single_box">
          <BlogSingle
            img={blog5}
            link="Park"
            text="Park is comming new"
            date="23 Mar. 2023"
          />
        </div>
        <div className="blog_single_box">
          <BlogSingle
            img={blog6}
            link="Park"
            text="Park is comming new"
            date="23 Mar. 2023"
          />
        </div>
        <div className="blog_single_box">
          <BlogSingle
            img={blog7}
            link="Park"
            text="Park is comming new"
            date="23 Mar. 2023"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
