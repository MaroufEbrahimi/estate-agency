import React from "react";

import LatestProperty from "../LatestProperty/LatestProperty";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="our_services">
        <h1>our services</h1>
        <div className="our_services_columns">
          <div className="our_services_col">
            <div className="our_services_title">
              <span className="fa fa-gamepad">2</span>
              <h2>Lifestyle</h2>
            </div>
            <p>
              Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum
              porta. Praesent sapien massa, convallis a pellentesque nec,
              egestas non nisi.
            </p>
            <a href="#">
              <span>
                Read more <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>

          <div className="our_services_col">
            <div className="our_services_title">
              <span className="fa fa-usd">2</span>
              <h2>Loans</h2>
            </div>
            <p>
              Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui
              posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh
              pulvinar a.
            </p>
            <a href="#">
              <span>
                Read more <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>

          <div className="our_services_col">
            <div className="our_services_title">
              <span className="fa fa-home">2</span>
              <h2>Sell</h2>
            </div>
            <p>
              Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum
              porta. Praesent sapien massa, convallis a pellentesque nec,
              egestas non nisi.
            </p>
            <a href="#">
              <span>
                Read more <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* LatestProperty */}
      <div className="latest_property">
        <LatestProperty />
      </div>
    </div>
  );
};

export default Home;
