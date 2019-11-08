import React from "react"
import "./_FranchiseBody.scss"
import LinkRegister from "../LinkRegister/LinkRegister"
import NewsFranchise from "../News/NewsFranchise"
import SloganFranchise from "../SloganFranchise/SloganFranchise"
// import ImgFranchise from "../ImgFranchise/ImgFranchise"
import VideoBackground from "../../UI/VideoBackground/VideoBackground"

const FranchiseBody = () => {
  return (
    <>
      {/* <ImgFranchise /> */}
      <VideoBackground/>
      <div className="container">
        <article className="article">
          <SloganFranchise />
          <LinkRegister />
          <NewsFranchise />
        </article>
      </div>
    </>
  )
}

export default FranchiseBody
