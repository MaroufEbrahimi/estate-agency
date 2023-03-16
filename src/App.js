import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import Layout from "../src/components/Layout/Layout";

const App = () => {
  const [show, handleShow] = useState(false);

  return (
    <div className="app">
      <Router>
        <Header show={show} handleShow={handleShow} />
        <Layout>
          <div style={{ height: "200vh" }}></div>
        </Layout>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
