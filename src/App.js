import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import Layout from "../src/components/Layout/Layout";
import Modal from "./components/Modal/Modal";
import ModalContent from "./components/Modal/ModalContent/ModalContent";
import Home from "./components/Home/Home";
import BackToTop from "./components/BackToTop/BackToTop";

const App = (props) => {
  const [show, handleShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 90) {
        setBackToTop(true);
      } else setBackToTop(false);
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
          <div style={{ height: "200vh" }}></div>
          <Home />
        </Layout>
        <Footer />
      </Router>
      <div className="back_to_top">
        <BackToTop backToTop={backToTop} setBackToTop={setBackToTop} />
      </div>
    </div>
  );
};

export default App;
