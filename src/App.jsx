import React from "react";
import { Routes, Route } from "react-router-dom";
import Event from "./components/event/Event";
import EventPage from "./components/EventPage/EventPage";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/homePage/HomePage";
import About from "./components/Aboutus/About";
import "@fortawesome/fontawesome-svg-core/styles.css";
import EventMap from "./components/event/eventMap";
// import LogIn from "./components/LogIn/LogIn";
import Contact from "./Contact/Contact";
import {Context} from "./Context/Context.jsx";
import { useContext,useState } from "react";
function App() {
const[users,setUsers]=useState(Context)
  return (
    <>
      <Context.Provider value={{users,setUsers}} >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="event" element={<EventMap />}></Route>
            <Route path="about" element={<About />} />
            <Route path="EventPage" element={<EventPage />} />
            <Route path="EventPage/:id" element={<Event />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            {/* <Route path="login" element={<LogIn />} /> */}
            <Route path="*" element={<div>404 Not Found</div>} />
          </Route>
        </Routes>
      </Context.Provider>
    </>
  );
}

export default App;
