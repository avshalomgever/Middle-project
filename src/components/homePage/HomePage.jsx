import React from "react";
import "./homePage.css";
// import Carousel from "better-react-carousel";
import Client from "../client-card/Client";
import data from "../../../dataEvent.json";
import { useState, useEffect } from "react";
import video from "../../../pictures/wedding clip.mp4"
import Carousel from "../carousel/Carousel";
import image1 from "../../../pictures/1.jpg"
import image2 from "../../../pictures/food8.jpg"
import image3 from "../../../pictures/food3.jpg"
import image4 from "../../../pictures/food2.jpg"
import image5 from "../../../pictures/food7.jpg"
import image6 from "../../../pictures/pic course2.jpeg"
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="background-image">
        <video
          className="background-video"
          src={video}
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
          When love, Soul and Creation meet there is something megical in the
          air. with us you can make your dream come true and reunite with your
          loved ones. Let's start a magical journey to the land of lovers. Let
          us be your guide and we shall begin!
        </p>
        <Link to={"/about"}>
          <button className="button-about">Our Story</button>
        </Link>
      </div>
      <div className="routes-cotainer">
        <div className="routes-image">
          <img
            className="routes-image-img"
            src={image1}
            alt=""
          />
        </div>
        <div className="routes-words">
          <h1 className="routes-headline">
            Let us create you the perfect event
          </h1>
          <hr className="hr-headline" />
          <p>
            Beginning of the journey to love, is not an easy thing. We are here
            to give the space to shine and to drow. We are here to make your
            dream come true. Choose your own event and let as guide you. Your journey begin now! 
          </p>
          <Link to={"/EventPage"}>
            <button className="button-routes">To the wedding!</button>
          </Link>
        </div>
      </div>
      <div className="carousel">
        <h1>Flavors Of Love</h1>
        <hr className="hr-headline" />
        <Carousel show={2} infiniteLoop={true}>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src={image2}
                alt="placeholder"
                style={{ width: "100%", borderRadius: "80vh " }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src={image3}
                alt="placeholder"
                style={{ width: "100%", borderRadius: "80vh " }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src={image4}
                alt="placeholder"
                style={{ width: "100%", borderRadius: "80vh " }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src={image5}
                alt="placeholder"
                style={{ width: "100%", borderRadius: "80vh " }}
              />
            </div>
          </div>
        </Carousel>
        <h2>
          Taste waterfall of flavors. Our delicaies are made with the infinite
          love of our talented chefs.
        </h2>
        <Link to={"/chef"}>
          <button className="button-routes">Meet the chef</button>
        </Link>
      </div>
      <div className="preparatory-course">
        <div className="information-preparatory-course">
          <h1 className="preparatory-course-headline">
            We are with you from the first moment
          </h1>
          <hr className="hr-headline" />
          <div className="words-preparatory-course">
          Discover the keys to a fulfilling and harmonious marriage in our
        Marriage Enrichment Course. Join us on a transformative journey to
        strengthen your bond, improve communication, and deepen your love and
        connection with your partner. This course is designed for married
        couples who want to invest in their relationship and create a lifetime
        of happiness together.
          </div>
          <Link to={'/course'}>
          <button className="button-preparatory-course">Let's start</button></Link>
        </div>
        <div className="image-preparatory-course">
          <img src={image6}/>
        </div>
      </div>

      <div className="card-client">
        {data1 &&
          data1.map((value, index) => {
            return (
              <div className="client">
                <Client key={index} value={value}></Client>
              </div>
            );
          })}
      </div>
      <div>
        <button
          className={`scroll-to-top ${isVisible ? "visible" : ""}`}
          onClick={scrollToTop}
        >
          <i className="arrow up"></i>
        </button>
      </div>
    </div>
  );
}

export default HomePage;
