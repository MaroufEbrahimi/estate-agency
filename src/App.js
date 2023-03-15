import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../src/components/Header/Header";

const App = () => {
  const [show, handleShow] = useState(false);

  return (
    <div className="app">
      <Router>
        <Header show={show} handleShow={handleShow} />
        <div style={{ height: "200vh" }}></div>
      </Router>
    </div>
  );
};

export default App;
