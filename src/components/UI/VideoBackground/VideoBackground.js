import React from "react"
import "./VideoBackground.scss"
import video from '../../../assets/videos/burger.mp4'

const VideoBackground = () => {
  return (
    <video autoPlay loop id="myVideo">
      <source src={video} type="video/mp4" />
    </video>
  )
}

export default VideoBackground
