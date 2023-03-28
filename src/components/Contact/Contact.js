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
    </div>
  );
};

export default Contact;
