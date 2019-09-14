import React from "react"
import YouTube from "react-youtube"
import "./VideoBackground.scss"

const videoIdA = "ssVKRRtQFso"

class VideoBackground extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videoId: videoIdA,
      player: null
    }
  }

  onReady = event => {
    this.setState({
      player: event.target
    })
  }

  // onPlayVideo = () => {
  //   this.state.player.playVideo()
  // }

  // onPauseVideo = () => {
  //   this.state.player.pauseVideo()
  // }

  render() {
    const opts = {
      playerVars: {
        autoplay: 1
      }
    }
    return (
      <div className="video-background">
        <YouTube
          opts={opts}
          videoId={this.state.videoId}
          onReady={this.onReady}
        />
      </div>
    )
  }
}
export default VideoBackground
