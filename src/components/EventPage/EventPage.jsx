import React from "react";
import "./EventPage.css"
import  FilterBar  from "../FilterBar/FilterBar";
import EventCard from "../EventCard/EventCard";
import { useState } from "react";

const EventPage = () => {
const[FilterData,setFilterData]=useState()
  return (
    <div className="EventPage">
      <div className="openning" >
      <h1 style={{marginBottom:"3vh"}} >Make your desires clearer</h1>
      <p>with our amazing recommendations!. <br />
        All you have to do is choose your preferences, <br />
         and get the wedding style that suits you</p>
      </div>
      
      <div className="filter-section">
        <FilterBar setFilterData={setFilterData} />
        <div className="fit4u">
          <h2>our  result</h2>
          <EventCard />
        </div>
      </div>
      <div className="Course"></div>
    </div>
  );
};

export default EventPage;
