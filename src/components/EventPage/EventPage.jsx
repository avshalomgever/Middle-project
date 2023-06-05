import React from "react";
import "./EventPage.css"
import  FilterBar  from "../FilterBar/FilterBar";
import EventCard from "../EventCard/EventCard";
import { useState,useEffect } from "react";
import {data} from "../../../dataEvent.json";

function CalMatchingPoints(weeding,selection) {
  let points = 0;

  if (selection.foodService.length !== 3) {
    let pointValue = 1 / selection.foodService.length;
    if (weeding.meal.some((value) => selection.foodService.includes(value))) {
      points += pointValue;
    }
  }

  if (selection.guests.length !== 2) {
    let pointValue = 1 / selection.guests.length;
    if (weeding.guest_composition.some((value) => selection.guests.includes(value))) {
      points += pointValue;
    }
  }

  if (selection.location.length !== 3) {
    let pointValue = 1 / selection.location.length;
    if (weeding.location.some((value) => selection.location.includes(value))) {
      points += pointValue;
    }
  }

  if (selection.timeInDay.length !== 2) {
    let pointValue = 1 / selection.timeInDay.length;
    if (weeding.time.some((value) => selection.timeInDay.includes(value))) {
      points += pointValue;
    }
  }

  return points;
};

const EventPage = () => {
  
useEffect(()=>setData1(data),[data])
const[Data1,setData1]=useState(undefined)
const[SelectData,setSelectData]=useState(undefined)



if (SelectData && Data1) {
  let a = data.sort((w1, w2) => (CalMatchingPoints(w1, SelectData) - CalMatchingPoints(w2, SelectData)))
  console.log(a);
  a.forEach(element => {
    console.log(CalMatchingPoints(element, SelectData));
  });
}

  return (
    <div className="EventPage">
      <div className="openning" >
      <h1 style={{marginBottom:"3vh"}} >Make your desires clearer</h1>
      <p>with our amazing recommendations!. <br />
        All you have to do is choose your preferences, <br />
         and get the wedding style that suits you</p>
      </div>
      
      <div className="filter-section">
        <FilterBar setSelectData={setSelectData} />
        <div className="fit4u">
          <h2>Our  results</h2>
          <EventCard data={data} />
        </div>
      </div>
      <div className="Course"></div>
    </div>
  );
};

export default EventPage;
