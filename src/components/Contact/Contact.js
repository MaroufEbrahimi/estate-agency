import React from "react";
import { Link } from "react-router-dom";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact_title">
        <div>
          <h1>Contact US</h1>
          <p>
            Aut voluptas consequatur unde sed omnis ex placeat quis eos. Aut
            natus officia corrupti qui autem fugit consectetur quo. Et ipsum
            eveniet laboriosam voluptas beatae possimus qui ducimus. Et
            voluptatem deleniti. Voluptatum voluptatibus amet. Et esse sed omnis
            inventore hic culpa.
          </p>
        </div>
        <p>
          <Link to="/">
            <span>Home </span>
          </Link>
          / Contact
        </p>
      </div>

      <div className="contact_section2">
        <div className="contact_section2_boxes">
          <form>
            <div className="contact_search_box">
              <input type="text" placeholder="Your Name" />
            </div>

            <div className="contact_search_box">
              <input type="text" placeholder="Your Email" />
            </div>

            <div className="contact_search_box full_box">
              <input type="text" placeholder="Subject" />
            </div>

            <div className="contact_search_box full_box">
              <textarea cols="30" rows="8" placeholder="Message"></textarea>
            </div>

            <div className="contact_search_box">
              <button className="btn" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="contact_section2_box">
          <div className="contact_info_row">
            <div className="con_info_header">
              <span className="ion-ios-paper-plane">1</span>
            </div>
            <div>
              <h3>Say Hello</h3>
              <p>
                Email. <span>famous@gmail.com</span>
              </p>
              <p>
                Phone. <span>+93 111 222333</span>
              </p>
            </div>
          </div>

          <div className="contact_info_row">
            <div className="con_info_header">
              <span className="ion-ios-pin">1</span>
            </div>
            <div>
              <h3>Find us in</h3>
              <p>
                Herat, Afghanistan 00011,
                <br />
                FM. AM.
              </p>
            </div>
          </div>

          <div className="contact_info_row">
            <div className="con_info_header">
              <span className="ion-ios-redo">1</span>
            </div>
            <div>
              <h3>Social networks</h3>
              <div className="social_links_contact">
                <Link to="/">
                  <i className="fa fa-twitter"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-instagram"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-linkedin"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-github"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-pinterest"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
