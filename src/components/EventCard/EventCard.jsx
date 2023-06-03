import React from "react";
import "./EventCard.css";
const EventCard = ({ item }) => {
  return (
    <div className="card-container">
      {/* <img src="data:image/jpeg;base64,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" alt="" />
        <p>for more info hover</p>            
        <p>berbergerfverververvqeverg0</p> */}
      <div className="container">
        <div className="card" id="card-1" >
          <div className="front"></div>
          <div className="back">
            <h1>Back of Card</h1>
            <p>Additional info on the back of the card</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card" id="card-2" >
          <div className="front"></div>
          <div className="back">
            <h1>Back of Card</h1>
            <p>Additional info on the back of the card</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card" id="card-3" >
          <div className="front"></div>
          <div className="back">
            <h1>Back of Card</h1>
            <p>Additional info on the back of the card</p>
            <a href=""><button></button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
