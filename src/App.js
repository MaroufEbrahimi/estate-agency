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

const App = (props) => {
  const [show, handleShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [backToTop, setBackToTop] = useState(false);

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
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/property" component={Property} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/agent-single" component={AgentSingle} />
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
