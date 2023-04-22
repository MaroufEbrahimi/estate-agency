import React from "react";
import { Link } from "react-router-dom";

import BlogSingle from "../../components/BlogSingle/BlogSingle";
import "./Blog.css";

const Blog = ({ blog2, blog3, blog4, blog5, blog6, blog7 }) => {
  return (
    <div className="blog">
      <div className="blog_title">
        <div>
          <h1>Our Amazing Posts</h1>
          <p>Grid News</p>
        </div>
        <p>
          <Link to="/estate-agency">
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
  )
};

export default Blog;
