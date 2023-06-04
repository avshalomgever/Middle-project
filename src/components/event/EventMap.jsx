import React from "react";
import data from "../../../dataEvent.json";
import { useState, useEffect } from "react";
import Event from "./Event";
import { Link } from "react-router-dom";

function EventMap() {
  const [dataEvent, setDataEvent] = useState([]);

  useEffect(() => {
    setDataEvent(data.data);
  }, []);
  console.log("value");
  return (
    <div>
      {dataEvent &&
        dataEvent.map((value, index) => {
          return (
            <Link key={index} to={`/EventPage/${value.id}`}>
              <Event value={value}  />
            </Link>
          );
        })}
    </div>
  );
}

export default EventMap;
