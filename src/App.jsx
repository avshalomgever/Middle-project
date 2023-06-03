import React from "react";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Event from "./components/event/Event";
=======
import EventPage from "./components/EventPage/EventPage";
<<<<<<< HEAD
>>>>>>> c538ab0 (add event page)
=======
>>>>>>> c538ab0e11e974bfac51ca232dfa6ef61c521dd7
>>>>>>> 12aeca2047dc294a19d187b9eef782c247ab5127
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
          <Route path="EventPage" element={<EventPage/>} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </>
  );
  }



export default App;
