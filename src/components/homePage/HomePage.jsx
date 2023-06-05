import React from "react";
import "./homePage.css";
// import Carousel from "better-react-carousel";
import Client from "../client-card/Client";
import data from "../../../dataEvent.json";
import { useState, useEffect } from "react";
import Carousel from "../carousel/Carousel";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import couples from "../../../dataClient.json";

function HomePage() {
  const [data1, setData1] = useState([]);

  useEffect(() => {
    setData1(couples.couples);
  }, [couples]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const shouldShowButton = scrollTop > 100;
    setIsVisible(shouldShowButton);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <div className="background-image">
        <video
          className="background-video"
          src="../../../pictures/wedding clip.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
          controls
        ></video>
      </div>
      <div className="about-us">
        <h1 className="about-us-headline">Love, Soul, Creation</h1>
        <hr className="hr-headline" />
        <p className="p-about-us">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem iusto
          magni totam. Praesentium voluptas ad pariatur aspernatur sequi aut
          corrupti soluta ex totam, voluptate harum facere dolorem? Omnis, harum
          nesciunt.
        </p>
        <Link to={'/about'}>
        <button className="button-about">Our Story</button>
        </Link>
      </div>
      <div className="routes-cotainer">
        <div className="routes-image">
          <img
            className="routes-image-img"
            src="../../../pictures/1.jpg"
            alt=""
          />
        </div>
        <div className="routes-words">
          <h1 className="routes-headline">
            Let us create you the perfect event
          </h1>
          <hr className="hr-headline" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            dolor minima nisi consequatur consequuntur. Laudantium, quasi culpa
            porro ad cupiditate sunt temporibus aliquid praesentium incidunt
            vitae! Omnis ab harum sequi!
          </p>
          <Link to={"/EventPage"}>
            <button className="button-routes">To the wedding</button>
          </Link>
        </div>
      </div>
      <div className="carousel">
        <h1>Flavors Of Love</h1>
        <Carousel show={2} infiniteLoop={true}>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="../../../pictures/hall 1.jpg"
                alt="placeholder"
                style={{ width: "100%", borderRadius: "80vh " }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="../../../pictures/hall 4.jpg"
                alt="placeholder"
                style={{ width: "100%", borderRadius: "80vh " }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="../../../pictures/hall 3.jpg"
                alt="placeholder"
                style={{ width: "100%", borderRadius: "80vh " }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="../../../pictures/hall 5.webp"
                alt="placeholder"
                style={{ width: "100%", borderRadius: "80vh " }}
              />
            </div>
          </div>
        </Carousel>
      </div>
      <div className="preparatory-course">
        <div className="information-preparatory-course">
          <h1 className="preparatory-course-headline">
            We are with you from the first moment
          </h1>
          <hr className="hr-headline" />
          <div className="words-preparatory-course">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            dicta voluptates reprehenderit, quo animi rerum. Suscipit aliquid
            minus eius quam mollitia odit similique voluptatem, exercitationem
            ratione obcaecati reiciendis quo iste?
          </div>
          <button className="button-preparatory-course">Let's start</button>
        </div>
        <div className="image-preparatory-course">
          <img src="../../../pictures/pic course2.jpeg" />
        </div>
      </div>

      <div className="card-client">
        {data1 &&
          data1.map((value, index) => {
            return (
              <div className="client" >
                <Client key={index} value={value}></Client>
              </div>
            );
          })}
      </div>
      <div>
      <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
 <i className="arrow up"></i>
    </button>
      </div>
    </div>
  );
}

export default HomePage;
