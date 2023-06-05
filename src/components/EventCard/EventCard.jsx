import React from "react";
import "./EventCard.css";
import data from "../../../dataEvent.json";
import { useState, useEffect } from "react";
import Event from "../event/Event";
import { Link } from "react-router-dom";

const EventCard = ({ data}) => {
  const [dataEvent, setDataEvent] = useState([]);

  useEffect(() => {
    setDataEvent(data.data);
  }, []);
  return (
   <div className="top-choice" >

    <div className="card-container" id="card-3" >
      <div className="container">
        <div className="card" >
          <div className="front">
            <img src= {data[2].image} alt="" id="img" />
            <div className="card-name">{ data[2].kind}</div>
          </div>
          <div className="back">
            <h1>{data[2].name}</h1>
            <p>Location: {data[2].location.join(", ")}</p>
            <p>Time: {data[2].time.join(", ")}</p>
            <p>Meal: {data[2].meal.join(", ")}</p>
            <p>Guest Composition: {data[2].guest_composition.join(", ")}</p>
            <Link to={`/EventPage/${data[2].id}`}><button>Save The Date</button></Link>
          </div>
        </div>
      </div>
    </div>

    <div className="card-container" id="card-1" >
      <div className="container">
        <div className="card" >
          <div className="front">
            <img src= {data[4].image} alt="" id="img" />
            <div className="card-name">{ data[4].kind}</div>
          </div>
          <div className="back">
            <h1>{data[4].name}</h1>
            <p>Location: {data[4].location.join(", ")}</p>
            <p>Time: {data[4].time.join(", ")}</p>
            <p>Meal: {data[4].meal.join(", ")}</p>
            <p>Guest Composition: {data[4].guest_composition.join(", ")}</p>
            <Link to={`/EventPage/${data[4].id}`}><button>Save The Date</button></Link>
          </div>
        </div>
      </div>
    </div>
    <div className="card-container" id="card-2" >
      <div className="container">
        <div className="card" >
          <div className="front">
            <img src= {data[3].image} alt="" id="img" />
            <div className="card-name">{ data[3].kind}</div>
          </div>
          <div className="back">
            <h1>{data[3].name}</h1>
            <p>Location: {data[3].location.join(", ")}</p>
            <p>Time: {data[3].time.join(", ")}</p>
            <p>Meal: {data[3].meal.join(", ")}</p>
            <p>Guest Composition: {data[3].guest_composition.join(", ")}</p>
            <Link to={`/EventPage/${data[3].id}`}><button>Save The Date</button></Link>
                 </div>
        </div>
      </div>
    </div>
    <div className="card-container" id="card-3" >
      <div className="container">
        <div className="card" >
          <div className="front">
            <img src= {data[2].image} alt="" id="img" />
            <div className="card-name">{ data[2].kind}</div>
          </div>
          <div className="back">
            <h1>{data[2].name}</h1>
            <p>Location: {data[2].location.join(", ")}</p>
            <p>Time: {data[2].time.join(", ")}</p>
            <p>Meal: {data[2].meal.join(", ")}</p>
            <p>Guest Composition: {data[2].guest_composition.join(", ")}</p>
            <a href=""><button>save the date</button></a>
          </div>
        </div>
      </div>
    </div>
    
   </div>
  );
};

export default EventCard;
