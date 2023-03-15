import React, { useState } from "react";

import Header from "../src/components/Header/Header";

const App = () => {
  const [show, handleShow] = useState(false);

  return (
    <div className="app">
      <Header show={show} handleShow={handleShow} />
      <div style={{ height: "200vh" }}></div>
    </div>
  );
};

export default App;
