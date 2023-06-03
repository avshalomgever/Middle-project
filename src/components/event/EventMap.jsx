import React from "react";
import data from "../../../dataEvent.json";
import { useState, useEffect } from "react";
import Event from "./Event";

function EventMap() {
  const [dataEvent, setDataEvent] = useState([]);

  useEffect(() => {
    setDataEvent(data.data);
  }, []);
  console.log("value")
  return (
    <div>
      {dataEvent &&
        dataEvent.map((value, index) => {
          return <Event  value={value} index={index} />;
        })}
    </div>
  );
}

export default EventMap;
