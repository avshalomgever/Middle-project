import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./compensate/Layout/Layout";
import Homepage from "./compensate/Homepage/Homepage";
import About from "./compensate/Aboutus/About";
import '@fortawesome/fontawesome-svg-core/styles.css';

function App() {
  return (
    <>
  
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About/>} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
