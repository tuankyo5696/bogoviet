import React from "react"
import "./_Home.scss"
import HomeBody from "./homeBody/homeBody"
import VideoBackground from '../../components/UI/VideoBackground/VideoBackground'
import Carousel from '../../components/UI/Slider/Carousel'

const Home = () => {
  return (
    <div className="menu">
      <Carousel />
      <VideoBackground />
      <HomeBody />
    </div>
  )
}

export default Home
