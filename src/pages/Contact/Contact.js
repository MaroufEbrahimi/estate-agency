import React from "react"
import { Link } from "react-router-dom"

import "./Contact.css"

const Contact = ({ setActive }) => {
  return (
    <div className="contact">
      <div className="contact_title every_pages_title">
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
          <Link to="/estate-agency" onClick={() => setActive("/estate-agency")}>
            <span>Home </span>
          </Link>
          / Contact
        </p>
      </div>

      <div className="contact_section1">
        <div id="map" className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses-419!2sve!4v1510329142834"
            allowfullscreen
          ></iframe>
        </div>
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
          </form>
          <button className="btn" type="submit">
            Send Message
          </button>
        </div>

        <div className="contact_section2_box">
          <div className="contact_info_row">
            <div className="con_info_header">
              <span className="ion-ios-paper-plane"></span>
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
              <span className="ion-ios-pin"></span>
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
              <span className="ion-ios-redo"></span>
            </div>
            <div>
              <h3>Social networks</h3>
              <div className="social_links">
                <a href="https://twitter.com/01Marouf" target="_blank">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/marouffmfm/" target="_blank">
                  <i className="fa fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/marouf-ebrahimi-7b6312237"
                  target="_blank"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://github.com/MaroufEbrahimi" target="_blank">
                  <i className="fa fa-github"></i>
                </a>
                <a
                  href="https://www.pinterest.com/maroufebrahimi/"
                  target="_blank"
                >
                  <i className="fa fa-pinterest"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
