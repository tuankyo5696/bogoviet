import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slide1 from "./../../../assets/images/bg-home1.jpg";
import Slide2 from "./../../../assets/images/bg-home2.jpg";

const carousel = props => (
  <div className="carousel">
    <Carousel autoPlay showThumbs={false} infiniteLoop={true}>
      <div>
        <img src={Slide1} alt="" />
      </div>
      <div>
        <img src={Slide2} alt="" />
      </div>
   
    </Carousel>
  </div>
);
export default carousel;
