import React from "react"
import "./_Home.scss"
import Carousel from "./../../components/UI/Slider/Carousel"
import HomeBody from "./homeBody/homeBody"
const Home = props => {
  return (
    <div className="menu">
      <Carousel />
      <HomeBody />
    </div>
  )
}

export default Home
