import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faHeart,
  faUsers,
  faArrowDown
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about">
          <div className="about-content">
            <h2 className="h-about">Who we are?</h2>
            <div className="icon-about">
              <div className="single-icon-about">
                <FontAwesomeIcon icon={faBusinessTime} />
                <p>3 years experience</p>
              </div>
              <div className="single-icon-about">
                <FontAwesomeIcon icon={faHeart} />
                <p>over 20,000 couples</p>
              </div>
              <div style={{marginBottom:"2vh"}}
               className="single-icon-about"  >
                <FontAwesomeIcon icon={faUsers} />
                <p>300 employees</p>
              </div>
            </div>
            <div>
            <p>our  story</p>
            <FontAwesomeIcon icon={faArrowDown} />
              
            </div>
          </div>
        </div>
      </div>
      <div className="about-story">
        <h2 className="story-header">Let Us Tell You a Little</h2>
        <hr className="story-headline" />
        <img src="" alt="" />
        <div className="text-container" id="text-align">
          Our event hall is more than just a venue -- we pride ourselves on
          offering a personalized elove storyxperience for couples embarking on their
          special journey. <br /> With years of experience, our team specializes in
          providing dedicated support and guidance to couples throughout the
          entire planning process. <br /> From the initial consultation to the final
          moments of the event, we are by your side, ensuring that every detail
          is taken care of with meticulous care and attention. <br /> Our personalized
          accompaniment extends beyond logistics; we take the time to understand
          your vision, preferences, and dreams, curating an unforgettable event
          that reflects your unique love story. <br /> Trust us to bring your vision to
          life and create memories that will be cherished for a lifetime.
        </div>
      </div>
    </div>
  );
};

export default About;
