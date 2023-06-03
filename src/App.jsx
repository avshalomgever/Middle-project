import React from "react";
import { Routes, Route } from "react-router-dom";
import Event from "./components/event/Event";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/homePage/HomePage";
import About from "./components/Aboutus/About";
import '@fortawesome/fontawesome-svg-core/styles.css';
import EventMap from "./components/event/eventMap";

function App() {
  return (
    <>
  
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="event" element={<EventMap/>}></Route>
          <Route path="about" element={<About/>} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </>
  );
  }



export default App;
