import React from "react";
import { Link } from "react-router-dom";

import LatestProperty from "../LatestProperty/LatestProperty";

import "./Home.css";

// Latest property images
import property_1 from "../../assets/latest-property/property-1.jpg";
import property_2 from "../../assets/latest-property/property-2.jpg";
import property_3 from "../../assets/latest-property/property-3.jpg";
import property_4 from "../../assets/latest-property/property-4.jpg";

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
        <div className="latest_property_title">
          <h1>Latest Properties</h1>
          <Link to="/property">
            All Property <span className="fa fa-angle-right"></span>
          </Link>
        </div>
        <div className="latest_property_boxes">
          <div className="latest_property_box">
            <LatestProperty
              img={property_1}
              title="206 Mount Olive Road Two"
              rent="RENT | $ 12.000"
              view="Click here to view"
            />
          </div>
          <div className="latest_property_box">
            <LatestProperty
              img={property_2}
              title="157 West Central Park"
              rent="RENT | $ 12.000"
              view="Click here to view"
            />
          </div>
          <div className="latest_property_box">
            <LatestProperty
              img={property_3}
              title="245 Azabu Nishi Park Let"
              rent="RENT | $ 12.000"
              view="Click here to view"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
