import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import Layout from "../src/components/Layout/Layout";
import Modal from "./components/Modal/Modal";
import ModalContent from "./components/Modal/ModalContent/ModalContent";
import Home from "./components/Home/Home";
import BackToTop from "./components/BackToTop/BackToTop";
import About from "./components/About/About";
import Property from "./components/Property/Property";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import AgentSingle from "./components/AgentSingle/AgentSingle";
import AgentsGrid from "./components/AgentsGrid/AgentsGrid";
import PropertySingle from "./components/PropertySingle/PropertySingle";

// ###----- images -----###
// agents
import slideAbout1 from "./assets/about/slide-about-1.jpg";
import about2 from "./assets/about/about-2.jpg";
import agent1 from "./assets/agents/agent-1.jpg";
import agent2 from "./assets/agents/agent-2.jpg";
import agent3 from "./assets/agents/agent-3.jpg";
import agent4 from "./assets/agents/agent-4.jpg";
import agent5 from "./assets/agents/agent-5.jpg";
import agent6 from "./assets/agents/agent-6.jpg";
import agent7 from "./assets/agents/agent-7.jpg";

// Property images
import propertySlide1 from "./assets/agents/slider/slide-1.jpg";
import propertySlide2 from "./assets/agents/slider/slide-2.jpg";
import propertySlide3 from "./assets/agents/slider/slide-3.jpg";
import property_1 from "./assets/latest-property/property-1.jpg";
import property_2 from "./assets/latest-property/property-2.jpg";
import property_3 from "./assets/latest-property/property-3.jpg";
import property_4 from "./assets/latest-property/property-4.jpg";
import property_5 from "./assets/latest-property/property-5.jpg";
import property_6 from "./assets/latest-property/property-6.jpg";
import property_7 from "./assets/latest-property/property-7.jpg";
import property_8 from "./assets/latest-property/property-8.jpg";
import property_9 from "./assets/latest-property/property-9.jpg";

// Blog images
import blog1 from "./assets/blog/post-1.jpg";
import blog2 from "./assets/blog/post-2.jpg";
import blog3 from "./assets/blog/post-3.jpg";
import blog4 from "./assets/blog/post-4.jpg";
import blog5 from "./assets/blog/post-5.jpg";
import blog6 from "./assets/blog/post-6.jpg";
import blog7 from "./assets/blog/post-7.jpg";

// Testimonials
import testimonial2 from "./assets/testimonials/testimonial-2.jpg";
import testimonialMini2 from "./assets/testimonials/mini-testimonial-2.jpg";

const App = (props) => {
  const [show, handleShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [backToTop, setBackToTop] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 90) {
        setBackToTop(true);
        handleShow(true);
      } else {
        setBackToTop(false);
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const modalCloseHandler = () => {
    setShowModal(false);
  };

  const backToTopFun = () => {
    window.addEventListener("click", () => {
      window.scroll(0, 0);
    });
  };

  return (
    <div className="app">
      <Modal showBackdrop={showModal} removeModal={modalCloseHandler}>
        <ModalContent removeModal={modalCloseHandler} />
      </Modal>
      <Router>
        <Header
          show={show}
          handleShow={handleShow}
          headerSearch={showModalHandler}
        />
        <Layout>
          <Route path="/" exact>
            <Home
              property_1={property_1}
              property_2={property_2}
              property_3={property_3}
              agent1={agent1}
              agent2={agent2}
              agent3={agent3}
              blog1={blog1}
              blog2={blog2}
              blog3={blog3}
              testimonial2={testimonial2}
              testimonialMini2={testimonialMini2}
            />
          </Route>
          <Route path="/about">
            <About
              slideAbout1={slideAbout1}
              about2={about2}
              agent7={agent7}
              agent6={agent6}
              agent5={agent5}
            />
          </Route>
          <Route path="/property">
            <Property
              property_4={property_4}
              property_5={property_5}
              property_6={property_6}
              property_7={property_7}
              property_8={property_8}
              property_9={property_9}
            />
          </Route>
          <Route path="/blog">
            <Blog
              blog2={blog2}
              blog3={blog3}
              blog4={blog4}
              blog5={blog5}
              blog6={blog6}
              blog7={blog7}
            />
          </Route>
          <Route path="/contact" component={Contact} />
          <Route path="/agent-single">
            <AgentSingle
              agent7={agent7}
              property_4={property_4}
              property_5={property_5}
              property_6={property_6}
              property_7={property_7}
              property_8={property_8}
              property_9={property_9}
            />
          </Route>
          <Route path="/agent-grid">
            <AgentsGrid
              agent1={agent1}
              agent2={agent2}
              agent3={agent3}
              agent4={agent4}
              agent5={agent5}
              agent6={agent6}
            />
          </Route>
          <Route path="/property-single">
            <PropertySingle
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
              agent4={agent4}
              propertySlide1={propertySlide1}
              propertySlide2={propertySlide2}
              propertySlide3={propertySlide3}
            />
          </Route>
        </Layout>
        <Footer />
      </Router>
      <BackToTop
        backToTop={backToTop}
        setBackToTop={setBackToTop}
        backToTopFun={backToTopFun}
      />
    </div>
  );
};

export default App;
