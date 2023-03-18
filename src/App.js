import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import Layout from "../src/components/Layout/Layout";
import Modal from "./components/Modal/Modal";
import ModalContent from "./components/Modal/ModalContent/ModalContent";

const App = (props) => {
  const [show, handleShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
        </Layout>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
