import React from "react"
import { Slide } from "react-slideshow-image"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Slide1 from "./../../../assets/images/home/slider/long.jpg"
import Slide2 from "./../../../assets/images/home/slider/slide2.jpg"
import Slide3 from "./../../../assets/images/home/slider/slide3.jpg"
import Slide4 from '../../../assets/images/home/slider/slide4.jpg'
import "./_Carousel.scss"

class carousel extends React.Component {
  render() {
    const opptions = {
      duration: 10000,
      transitionDuration: 300,
      infinite: true,
      arrows: true
  
    }

    return (
      <div className="carouselRespon">
        <Slide {...opptions}>
          <img src={Slide1} alt="" />
          <img src={Slide2} alt="" />
          <img src={Slide3} alt="" />
          <img src={Slide4} alt="" />
        </Slide>
      </div>
    )
  }
}
export default carousel
