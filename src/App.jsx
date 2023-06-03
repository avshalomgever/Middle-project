import React from "react";
import { Routes, Route } from "react-router-dom";
import EventPage from "./components/EventPage/EventPage";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/Homepage/Homepage";
import About from "./components/Aboutus/About";
import '@fortawesome/fontawesome-svg-core/styles.css';

function App() {
  return (
    <>
  
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About/>} />
          <Route path="EventPage" element={<EventPage/>} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </>
  );
  }



export default App;
