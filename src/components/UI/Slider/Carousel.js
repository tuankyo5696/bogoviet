import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Slide1 from "./../../../assets/images/home/slider/1.jpg"
import Slide2 from "./../../../assets/images/home/slider/slide3.jpg"
import Slide3 from "./../../../assets/images/bg-home3.png"
import "./_Carousel.scss"

const carousel = props => (
  <div className="carouselRespon">
    <Carousel autoPlay showThumbs={false} infiniteLoop={true} showStatus={false}>
      <div>
        <img src={Slide1} alt="" />
      </div>
      {/* <div>
        <img src={Slide2} alt="" />
      </div> */}
      {/* <div>
        <img src={Slide3} alt="" />
      </div> */}
    </Carousel>
  </div>
)
export default carousel
