import React from "react"
import "./_Home.scss"
import Carousel from "./../../components/UI/Slider/Carousel"
import HomeBody from "./homeBody/homeBody"
const Home = props => {
  return (
    <div className="menu">
      <div className="container1">
        <div className="row no-gutters carouselHome">
          <Carousel />
        </div>
      </div>
      <HomeBody />
    </div>
  )
}

export default Home
