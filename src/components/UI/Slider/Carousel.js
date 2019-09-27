import React from "react"
import { Slide } from "react-slideshow-image"
import "react-responsive-carousel/lib/styles/carousel.min.css"
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
          <img src="https://i.ibb.co/jTjNJ5w/long.jpg" alt="" />
          <img src="https://i.ibb.co/z5np4TZ/slide2.jpg" alt="" />
          <img src="https://i.ibb.co/kX4yY4n/slide3.jpg" alt="" />
          <img src="https://i.ibb.co/Fwp5gF8/slide4.jpg" alt="" />
        </Slide>
      </div>
    )
  }
}
export default carousel
