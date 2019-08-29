import React from "react"
import "./_ImgFranchise.scss"
import imgLogo from "../../../assets/images/logo.png"
import img1 from "../../../assets/images/franchise/franchise1.jpg"
import img2 from "../../../assets/images/franchise/franchise2.jpg"
import img3 from "../../../assets/images/franchise/franchise3.jpg"
import img4 from "../../../assets/images/franchise/Save-Money-1.jpg"

const ImgFranchise = () => {
  return (
    <>
      <div className="coverImgFranchise">
        {/* <div className="logoDiv">
                  <img alt="logoicon" src={imgLogo}></img>
                  <div></div>
              </div> */}
        <div className="divGroup">
          <div>
            {/* <img alt="logoicon" src={imgLogo} className="icon"></img> */}
            <img alt="" src={img1}></img>
          </div>
          <div className="div2Img">
            <img alt="logoicon" src={imgLogo} className="icon"></img>
            <p>Bogoviet Bogoviet Bogoviet Bogoviet Bogoviet </p>
          </div>
        </div>
        <div className="divGroup">
          <img alt="" src={img2}></img>
          <p>Bogoviet Bogoviet Bogoviet Bogoviet Bogoviet </p>
        </div>
        <div className="divGroup">
          <img alt="" src={img3}></img>
          <p>Bogoviet Bogoviet Bogoviet Bogoviet Bogoviet </p>
        </div>
        <div className="divGroup">
          <img alt="" src={img4}></img>
          <p>Bogoviet Bogoviet Bogoviet Bogoviet Bogoviet </p>
        </div>
      </div>
    </>
  )
}

export default ImgFranchise
