import React, { useState } from "react"
import { Link } from "react-router-dom"

import "./BlogDetails.css"
import CommentList from "../../components/CommentList/CommentList"

const BlogDetails = ({ propertySlide3, author1, addProduct, products }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()

    addProduct({ name: name, email: email, comment: comment })
  }

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
          <p>Marouf Famous Author</p>
        </div>
        <div className="blog_details_section2_4">
          <p>
            Donec rutrum congue leo eget malesuada. Curabitur aliquet quam id
            dui posuere blandit. Vivamus suscipit tortor eget felis porttitor
            volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id
            enim.
          </p>
        </div>
        <div className="blog_details_social_links">
          <span>Share: </span>
          <a href="https://twitter.com/01Marouf" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/marouffmfm/" target="_blank">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/marouf-ebrahimi-7b6312237">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://www.pinterest.com/maroufebrahimi/" target="_blank">
            <i className="fa fa-pinterest"></i>
          </a>
        </div>
      </div>

      <div className="blog_details_section3">
        <div className="blog_details_section3_title title_blog_details">
          <h1>Comments (1)</h1>
        </div>

        <div>
          <CommentList products={products} author1={author1} />
        </div>
      </div>

      <div className="blog_details_section4">
        <div className="blog_details_section4_title title_blog_details">
          <h1>Leave a Comment</h1>
        </div>
        <form onSubmit={submitHandler}>
          <div className="blog_details_section4_box">
            <label>Enter name</label>
            <input
              type="text"
              id="customer_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name *"
              required
            />
          </div>

          <div className="blog_details_section4_box">
            <label>Enter email</label>
            <input
              type="email"
              id="email_address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email *"
              required
            />
          </div>

          {/* <div className="blog_details_section4_box full_box">
            <label>Enter website</label>
            <input type="text" placeholder="Website" />
          </div> */}

          <div className="blog_details_section4_box full_box">
            <label>Enter message</label>
            <textarea
              cols="40"
              rows="5"
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Comment *"
              required
            ></textarea>
          </div>
          <div className="blog_details_section4_box">
            <button type="submit" className="btn bolg_details_btn">
              Send Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BlogDetails
