import React from "react";
import "./homePage.css";
import Carousel from "better-react-carousel";
import Client from "../client-card/Client";
import data from "../../../dataEvent.json";
import { useState, useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import {Link} from 'react-router-dom'

function HomePage() {
  const [data1, setData1] = useState([]);

  useEffect(() => {
    setData1(data.couples);
  }, []);
  return (
    <div>
      <div className="background-image">
        <video
        className="background-video"
          src="../../../pictures/wedding clip.mp4"
          type="video/mp4"
          autoPlay
          loop muted controls
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
        <button className="button-about">Our Story</button>
      </div>
      <div className="routes-cotainer">
        <div className="routes-image">
          <img
            className="routes-image-img"
            src="../../../pictures/routes pic.jpg"
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
          <Link to={'/event'}> 
          <button className="button-routes">To the wedding</button>
          </Link>
        </div>
      </div>
      <div className="carousel">
        <Carousel
          cols={2}
          rows={1}
          gap={10}
          loop
          scrollSnap={true}
          showDots={true}
        >
          <Carousel.Item>
            <img
              style={{ borderRadius: "70px" }}
              width="100%"
              src="../../../pictures/hall 1.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ borderRadius: "70px" }}
              width="100%"
              src="../../../pictures/hall 4.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ borderRadius: "70px" }}
              width="100%"
              src="../../../pictures/hall 3.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ borderRadius: "70px" }}
              width="100%"
              src="../../../pictures/hall 5.webp"
            />
          </Carousel.Item>
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
      <div>
        <Carousel cols={2} rows={1} gap={10} loop>
          {data1 &&
            data1.map((value, index) => {
              return (
                <Carousel.Item key={index}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://picsum.photos/200"
                      />
                      <CardContent>
                        <Typography height='100%' gutterBottom variant="h5" component="div">
                          {value.name} {value.age}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {value.experience}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Carousel.Item>
              );
            })}
        </Carousel>
      </div>
    </div>
  );
}

export default HomePage;
