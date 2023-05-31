import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Layout from "./compensate/Layout/Layout";
import Homepage from "./compensate/Homepage/Homepage";
import About from "./compensate/Aboutus/About";

function App() {
  return (
    <>
      <Helmet>
        <title>Wedding site</title>
        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
      />
      </Helmet>
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
