import React from "react"
import "./_Home.scss"
import HomeBody from "./homeBody/homeBody"
import VideoBackground from '../../components/UI/VideoBackground/VideoBackground'

const Home = props => {
  return (
    <div className="menu">
      <VideoBackground />
      <HomeBody />
    </div>
  )
}

export default Home
