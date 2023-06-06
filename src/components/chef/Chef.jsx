import React from "react";
import "./chef.css";
import { Link } from "react-router-dom";
import image10 from "../../../pictures/pinukim.jpg"
function Chef() {
  return (
    <div>
      <div className="chef-container">
        <div className="chef-image">
          <img src={image10} alt="" />
        </div>
        <div className="chef-details">
          <h1>The indulgent-indulges</h1>
          <p>
            <h3>Who is indulge-indulges. The good life</h3> Our chef advocates
            the good life. He will make sure that your mouth remains speechless.
          </p>
          <span>Alon Pinukim-The Good Life</span>
          <Link to={'/EventPage'}>
          <button className="chef-button">Reserve a date now!</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Chef;
