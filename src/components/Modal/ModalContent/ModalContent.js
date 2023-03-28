import React from "react";

import "./ModalContent.css";

const ModalContent = (props) => {
  return (
    <div className="search_property">
      <div className="search_property_title">
        <h1>search property</h1>
        <button className="search_property_close" onClick={props.removeModal}>
          &times;
        </button>
      </div>

      <div className="search_form">
        <form>
          <div className="search_box full_box">
            <label>Keyword</label>
            <input type="text" placeholder="Keyword" />
          </div>

          <div className="search_box">
            <label>Type</label>
            <select id="type">
              <option>All Type</option>
              <option>For Rent</option>
              <option>For Sale</option>
              <option>Open House</option>
            </select>
          </div>

          <div className="search_box">
            <label>City</label>
            <select id="city">
              <option>All City</option>
              <option>Herat</option>
              <option>Kabul</option>
              <option>Norstan</option>
              <option>Panjsher</option>
            </select>
          </div>

          <div className="search_box">
            <label>Bedrooms</label>
            <select id="bedrooms">
              <option>Any</option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
            </select>
          </div>

          <div className="search_box">
            <label>Garages</label>
            <select id="garages">
              <option>Any</option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
            </select>
          </div>

          <div className="search_box">
            <label>Bathrooms</label>
            <select id="bathrooms">
              <option>Any</option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
            </select>
          </div>

          <div className="search_box">
            <label>Min Price</label>
            <select id="price">
              <option>Unlimite</option>
              <option>$50,000</option>
              <option>$100,000</option>
              <option>$150,000</option>
              <option>$200,000</option>
            </select>
          </div>

          <div className="search_box">
            <button className="btn" type="submit">
              Search Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalContent;
